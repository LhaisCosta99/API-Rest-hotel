import HospedesDAO from "../DAO/HospedesDAO.js"
import HospedesModel from "../model/HospedesModel.js"

class HospedesController{
    static rotas(app){
        app.get("/hospedes", async(req, res)=>{
            try {                
                const hospedes = await HospedesDAO.listarTodosOsHospedes()
                res.status(200).json(hospedes)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/hospedes/:id", async (req, res) => {
            try {
                const hospede = await HospedesDAO.listarHospedesPorID(req.params.id)

                if(!hospede.id){
                    throw new Error("Hospede não encontrado para esse id")
                }
                res.status(200).json(hospede)
            } catch (erro) {
                res.status(404).json({message: erro.message, id: req.params.id})
            }
        })

        app.post("/hospedes", async (req, res) => {
            const hospede = new HospedesModel(req.body.nome, req.body.cpf, req.body.email, req.body.telefone)
            try {
                const inserir = await HospedesDAO.criarHospede(hospede)
                res.status(201).json(inserir)
            } catch (erro) {
                res.status(400).json(erro.message)
            }
        })
    
        app.patch("/hospedes/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.entries(req.body)
            try {                
                const hospede = await HospedesDAO.listarHospedesPorID(id)

                if(!hospede.id){
                    throw new Error("Hospede não encontrado para esse id")
                }

                body.forEach((elemento) => hospede[elemento[0]] = elemento[1])

                delete hospede.id

                const resposta = await HospedesDAO.atualizarHospedesPorID(id, hospede)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, id})
            }
            
        })

        app.delete("/hospedes/:id", async (req, res) => {
            const id = req.params.id
            try {     
                
                const hospede = await HospedesDAO.listarHospedesPorID(id)

                if(!hospede.id){
                    throw new Erro("Hospede não encontrado")
                }

                const resposta = await HospedesDAO.deletarHospedesPorID(id)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, id})
            }
        })
    }

}

export default HospedesController