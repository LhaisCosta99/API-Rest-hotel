import FuncionariosRepository from "../repository/FuncionariosRepository.js"
import ValidacoesFuncionario from "../services/FuncionariosService.js"

class FuncionariosController{
    static rotas(app){
        app.get("/funcionarios", async(req, res)=>{
            try {                
                const funcionarios = await FuncionariosRepository.buscarTodosOsFuncionarios()
                res.status(200).json(funcionarios)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/funcionarios/:id", async (req, res) => {
            try {
                const funcionario = await FuncionariosRepository.buscarFuncionarioPorId(req.params.id)

                if(!funcionario._id){
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

                const funcionario = req.body

                const inserir = await FuncionariosRepository.criarFuncionario(funcionario)
                
                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({message: erro.message})
            }
        })
    
        app.delete("/funcionarios/:id", async (req, res) => {
            const id = req.params.id
            try {     
                
                const funcionario = await FuncionariosRepository.buscarFuncionarioPorId(id)

                if(!funcionario._id){
                    throw new Erro("Funcionário não encontrado")
                }

                const resposta = await FuncionariosRepository.deletaFuncionarioPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, id})
            }
        })

        app.patch("/funcionarios/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.entries(req.body)
            try {                
                const funcionario = req.body

                if(!funcionario._id){
                    throw new Error("Funcionário não encontrado para esse id")
                }

                body.forEach((elemento) => funcionario[elemento[0]] = elemento[1])

                delete funcionario._id

                ValidacoesFuncionario.validaFuncionario(funcionario.nome, funcionario.turno, funcionario.funcao)
                const resposta = await FuncionariosRepository.atualizaFuncionarioPorId(id, funcionario)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, id})
            }
            
        })
    }

}

export default FuncionariosController