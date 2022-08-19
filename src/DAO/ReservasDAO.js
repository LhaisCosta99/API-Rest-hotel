import DAO from "./DAO.js";

class ReservasDAO {
    static async criaTabelaReservas(){
        const query = `
        CREATE TABLE IF NOT EXISTS Reservas (
                id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                idCliente INT,
                idQuarto INT,
                qtdDias INT,
                checkIn DATETIME,
                checkOut DATETIME
            )
        `

        const resposta = await DAO.criaTabelas(query)
        
        return resposta
    }
    
    static async criarReserva(body){
        const query = `
        INSERT INTO Reservas (idCliente, idQuarto, qtdDias, checkIn, checkOut) VALUES (?,?,?,?,?)
        `
        const entidade = [body.idCliente, body.idQuarto, body.qtdDias, body.checkIn, body.checkOut]

        const resposta = await DAO.CriarRegistro(query, entidade)

        return resposta
    }

    static async listarTodosOsReservas(){
        const query = `
        SELECT * FROM Reservas
        `
        const resposta = await DAO.buscarTodosOsRegistros(query)

        return resposta
    }

    static async listarReservasPorID(id){
        const query = `
         SELECT * FROM Reservas WHERE id = ?`
        
        const resposta = await DAO.buscarRegistroPorId(query,id)
        
        return resposta
    }

    static async deletarReservasPorID(id){
        const query = `
        DELETE FROM Reservas WHERE id = ?`
        
        const resposta = await DAO.DeletarRegistroPorId(query, id)
        
        return resposta
    }

    static async atualizarReservasPorID(id, Reserva){
        const query = `
        UPDATE Reservas SET (idCliente, idQuarto, qtdDias, checkIn, checkOut) = (?,?,?,?,?) WHERE id = ?`
        
        const resposta = await DAO.atualizarRegistroPorId(query, Reserva, id)
        
        return resposta
    }
}

export default ReservasDAO