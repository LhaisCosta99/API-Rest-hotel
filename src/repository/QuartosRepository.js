import Quartos from "../model/QuartosModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class QuartosRepository {
    static async criarQuarto(quarto){
        const response =  await RepositoryGeneral.criar(Quartos, quarto)
        return response
    }

    static async buscarTodasOsQuartos(){
        const response = await RepositoryGeneral.buscarTodos(Quartos)
        return response
    }

    static async buscarQuartoPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Quartos, id)
        return response
    }

    static async atualizaQuartoPorId(id, quarto){
        const response = await RepositoryGeneral.atualizaPorId(Quartos, id, quarto)
        return response
    }

    static async deletaQuartoPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Quartos, id)
        return response
    }
}

export default QuartosRepository;