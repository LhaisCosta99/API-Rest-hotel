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

        app.post("/hospedes", async (req, res) => {
            const hospede = new HospedesModel(req.body.nome, req.body.cpf, req.body.email, req.body.telefone)
            try {
                const inserir = await HospedesDAO.criarHospede(hospede)
                res.status(201).json(inserir)
            } catch (erro) {
                res.status(400).json(erro.message)
            }
        })
    }
}

export default HospedesController