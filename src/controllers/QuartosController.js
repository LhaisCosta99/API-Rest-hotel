import QuartosRepository from "../repository/QuartosRepository.js"
import ValidacoesQuarto from "../services/quartosService.js"

class QuartosController{
    static rotas(app){
        app.get("/quartos", async(req, res)=>{
            try {                
                const quartos = await QuartosRepository.buscarTodosOsQuartos()
                res.status(200).json(quartos)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/quartos/:id", async (req, res) => {
            try {
                const quarto = await QuartosRepository.atualizaQuartoPorId(req.params.id)

                if(quarto == null || quarto == undefined){
                    throw new Error("Id de quarto inválido")
                }
                res.status(200).json(quarto)
            } catch (erro) {
                res.status(404).json({message: erro.message, id: req.params.id})
            }
        })

        app.post("/quartos", async (req, res) => {
            try {
                // if (criado != null || criado != undefined) {
                //     throw new Error("Já existe um quarto com este número")
                // }

                const quarto = req.body

                const inserir = await QuartosRepository.criarQuarto(quarto)
                
                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({message: erro.message})
            }
        })
    
        app.patch("/quartos/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.entries(req.body)
            try {                
                const quarto = await QuartosRepository.atualizaQuartoPorId(id)

                if(quarto == null || quarto == undefined){
                    throw new Error("Número de quarto inválido")
                }

                body.forEach((elemento) => quarto[elemento[0]] = elemento[1])

                delete quarto._id

                const resposta = await QuartosRepository.atualizaQuartoPorId(id, quarto)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, id})
            }
            
        })

        app.delete("/quartos/:id", async (req, res) => {
            const id = req.params.id
            try {     
                
                const quarto = await QuartosRepository.buscarQuartoPorId(id)

                if(quarto == null || quarto == undefined){
                    throw new Error("Número de quarto inexistente")
                }

                const resposta = await QuartosRepository.deletaQuartoPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, id})
            }
        })

    }
}

export default QuartosController;
