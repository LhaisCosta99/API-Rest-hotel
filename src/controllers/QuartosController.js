import QuartosDAO from "../DAO/QuartosDAO.js"
import QuartosModel from "../model/QuartosModel.js"
//import Validacoesquarto from "../services/quartosService.js"

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

    
    }
}

export default QuartosController;