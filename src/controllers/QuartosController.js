import QuartosDAO from "../DAO/QuartosDAO.js"
import QuartosModel from "../model/QuartosModel.js"
import ValidacoesQuarto from "../services/quartosService.js"

class QuartosController{
    static rotas(app){
        app.get("/quartos", async(req, res)=>{
            try {                
                const quartos = await QuartosDAO.listarTodosOsQuartos()
                res.status(200).json(quartos)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/quartos/:numero", async (req, res) => {
            try {
                const quarto = await QuartosDAO.listarQuartosPorNumero(req.params.numero)

                if(quarto == null || quarto == undefined){
                    throw new Error("Número de quarto inválido")
                }
                res.status(200).json(quarto)
            } catch (erro) {
                res.status(404).json({message: erro.message, numero: req.params.numero})
            }
        })

        app.post("/quartos", async (req, res) => {
            try {
                ValidacoesQuarto.validaNumero(req.body.numero, req.body.tipo, req.body.status)

                let criado = await QuartosDAO.listarQuartosPorNumero(req.body.numero) 
                if (criado != null || criado != undefined) {
                    throw new Error("Já existe um quarto com este número")
                }

                const quarto = new QuartosModel(req.body.numero, req.body.tipo, req.body.status)

                const inserir = await QuartosDAO.criarQuarto(quarto)
                
                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({message: erro.message})
            }
        })
    
        app.patch("/quartos/:numero", async (req, res)=>{
            const numero = req.params.numero
            const body = Object.entries(req.body)
            try {                
                const quarto = await QuartosDAO.listarQuartosPorNumero(numero)

                if(quarto == null || quarto == undefined){
                    throw new Error("Número de quarto inválido")
                }

                body.forEach((elemento) => quarto[elemento[0]] = elemento[1])

                delete quarto.numero

                ValidacoesQuarto.validaNumero(req.body.numero, req.body.tipo, req.body.status)
                const resposta = await QuartosDAO.atualizarQuartosPorNumero(numero, quarto)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, numero})
            }
            
        })

        app.delete("/quartos/:numero", async (req, res) => {
            const numero = req.params.numero
            try {     
                
                const quarto = await QuartosDAO.listarQuartosPorNumero(numero)

                if(quarto == null || quarto == undefined){
                    throw new Error("Número de quarto inexistente")
                }

                const resposta = await QuartosDAO.deletarQuartosPorNumero(numero)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, numero})
            }
        })

    }
}

export default QuartosController;
