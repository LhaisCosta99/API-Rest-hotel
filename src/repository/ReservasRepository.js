import Reservas from "../model/ReservasModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class ReservasRepository {
    static async criarReserva(reserva){
        const response =  await RepositoryGeneral.criar(Reservas, reserva)
        return response
    }

    static async buscarTodasAsReservas(){
        const response = await RepositoryGeneral.buscarTodos(Reservas)
        return response
    }

    static async buscarReservaPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Reservas, id)
        return response
    }

    static async atualizaReservaPorId(id, reserva){
        const response = await RepositoryGeneral.atualizaPorId(Reservas, id, reserva)
        return response
    }

    static async deletaReservaPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Reservas, id)
        return response
    }
}

export default ReservasRepository;