import Hospedes from "../model/HospedesModel.js"
import RepositoryGeneral from "./RepositoryGeneral.js"

class HospedesRepository{
    static async criarHospede(hospede){
        const response =  await RepositoryGeneral.criar(Hospedes, hospede)
        return response
    }

    static async buscarTodosOsHospedes(){
        const response = await RepositoryGeneral.buscarTodos(Hospedes)
        return response
    }

    static async buscarHospedePorId(id){
        const response = await RepositoryGeneral.buscarPorId(Hospedes, id)
        return response
    }

    static async atualizaHospedePorId(id, hospede){
        const response = await RepositoryGeneral.atualizaPorId(Hospedes, id, hospede)
        return response
    }

    static async deletaHospedePorId(id){
        const response = await RepositoryGeneral.deletarPorId(Hospedes, id)
        return response
    }

    static async buscarHospedePorEmail(email){
        const response = await RepositoryGeneral.buscarPorChave(Hospedes, 'email', email)
        return response
    }

    static async atualizaHospedePorEmail(email, payload){
        const response = await RepositoryGeneral.atualizarPorChave(Hospedes,'email', email, payload)
        return response
    }
}

export default HospedesRepository;