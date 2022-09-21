import HospedesRepository from "../repository/HospedesRepository.js"
import HospedeService from "../services/HospedeService.js"
import ValidacoesHospede from "../services/hospedesValidacoesService.js"

class HospedesController{
    static rotas(app){
        app.get("/hospedes", async(req, res)=>{
            try {                
                const hospedes = await HospedesRepository.buscarTodosOsHospedes()
                res.status(200).json(hospedes)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/hospedes/:id", async (req, res) => {
            try {
                const hospede = await HospedesRepository.buscarHospedePorId(req.params.id)

                if(!hospede._id){
                    throw new Error("Hospede não encontrado para esse id")
                }
                res.status(200).json(hospede)
            } catch (erro) {
                res.status(404).json({message: erro.message, id: req.params.id})
            }
        })

        app.post("/hospedes", async (req, res) => {
            try {
                await ValidacoesHospede.validaHospede(req.body.nome, req.body.cpf, req.body.email, req.body.telefone)
                
                const hospede = req.body
                
                const inserir = await HospedesRepository.criarHospede(hospede)
                
                res.status(201).json(inserir)
                
            } catch (erro) {
                if(erro.message == "Email já cadastrado."){
                    res.status(406).json({message: erro.message})
                }
                else {
                    res.status(400).json({message: erro.message})
                }
            }
        })

        app.post('/hospedes/login', async (req, res)=>{
            try {
                if(!req.body || !req.body.email || !req.body.senha){
                    throw new Error("Input incompleto, favor passar email e senha no objeto.")
                }
                const payload = req.body

                const response = await HospedeService.login(payload)
                res.status(200).json(response)
            } catch (e) {

                if(e.message == "Input incompleto, favor passar email e senha no objeto."){
                    res.status(400).json({status: 400, message: e.message})
                } else if(e.message == "Usuario com senha incorreta."){
                    res.status(403).json({status: 403, message: e.message})
                } else {
                    res.status(404).json({status: 404, message: "Usuário não encontrado."})
                }
            }
        })
        
        app.patch("/hospedes/:id", async (req, res)=>{
            const id = req.params.id
            const body = Object.entries(req.body)
            try {                
                const hospede = await HospedesRepository.buscarHospedePorId(id)

                if(!hospede._id){
                    throw new Error("Hospede não encontrado para esse id")
                }

                body.forEach((elemento) => hospede[elemento[0]] = elemento[1])

                delete hospede._id

                ValidacoesHospede.validaHospede(hospede.nome, hospede.cpf, hospede.email, hospede.telefone)
                const resposta = await HospedesRepository.atualizaHospedePorId(id, hospede)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, id})
            }
            
        })

        app.post("/hospedes/update/email", async (req, res)=>{
            const email = req.body.email
            const body = Object.entries(req.body)
            try {                
                const hospede = await HospedesRepository.buscarHospedePorEmail(email)

                if(!hospede._id){
                    throw new Error("Hospede não encontrado para esse email")
                }

                body.forEach((elemento) => hospede[elemento[0]] = elemento[1])

                delete hospede._id

                // ValidacoesHospede.validaHospede(hospede.nome, hospede.cpf, hospede.email, hospede.telefone)
                const resposta = await HospedesRepository.atualizaHospedePorEmail(email, hospede)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({message: erro.message, email})
            }
            
        })

        app.delete("/hospedes/:id", async (req, res) => {
            const id = req.params.id
            try {     
                
                const hospede = await HospedesRepository.buscarHospedePorId(id)

                if(!hospede._id){
                    throw new Erro("Hospede não encontrado")
                }

                const resposta = await HospedesRepository.deletaHospedePorId(id)

                res.status(200).json(resposta)

            } catch (erro) {    
                res.status(404).json({Erro: erro.message, id})
            }
        })
    }

}

export default HospedesController