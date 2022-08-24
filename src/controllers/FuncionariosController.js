import FuncionariosDAO from "../DAO/FuncionariosDAO.js"
import FuncionariosModel from "../model/FuncionariosModel.js"
import ValidacoesFuncionario from "../services/FuncionariosService.js"

class FuncionariosController{
    static rotas(app){
        app.get("/funcionarios", async(req, res)=>{
            try {                
                const funcionarios = await FuncionariosDAO.listarTodosOsFuncionarios()
                res.status(200).json(funcionarios)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/funcionarios/:id", async (req, res) => {
            try {
                const funcionario = await FuncionariosDAO.listarFuncionariosPorID(req.params.id)

                if(!funcionario.id){
                    throw new Error("funcionario não encontrado para esse id")
                }
                res.status(200).json(funcionario)
            } catch (erro) {
                res.status(404).json({message: erro.message, id: req.params.id})
            }
        })

        app.post("/funcionarios", async (req, res) => {
            try {
                ValidacoesFuncionario.validaFuncionario(req.body.nome, req.body.funcao, req.body.turno)

                const funcionario = new FuncionariosModel(req.body.nome, req.body.funcao, req.body.turno)

                const inserir = await FuncionariosDAO.criarFuncionario(funcionario)
                
                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({message: erro.message})
            }
        })
    
        app.delete("/funcionarios/:id", async (req, res) => {
            const id = req.params.id
            try {     
                
                const funcionario = await FuncionariosDAO.listarFuncionariosPorID(id)

                if(!funcionario.id){
                    throw new Erro("Funcionário não encontrado")
                }

                const resposta = await FuncionariosDAO.deletarFuncionarioPorID(id)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, id})
            }
        })

        app.patch("/funcionarios/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.entries(req.body)
            try {                
                const funcionario = await FuncionariosDAO.listarFuncionariosPorID(id)

                if(!funcionario.id){
                    throw new Error("Funcionário não encontrado para esse id")
                }

                body.forEach((elemento) => funcionario[elemento[0]] = elemento[1])

                delete funcionario.id

                ValidacoesFuncionario.validaFuncionario(funcionario.nome, funcionario.turno, funcionario.funcao)
                const resposta = await FuncionariosDAO.atualizarFuncionarioPorID(id, funcionario)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, id})
            }
            
        })
    }

}

export default FuncionariosController