import DAO from "./DAO.js";

class QuartosDAO {
    static async criaTabelaQuartos(){
        const query = `
        CREATE TABLE IF NOT EXISTS Quartos (
                id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                numero INT,
                tipo VARCHAR,
                status VARCHAR,
            )
        `

        const resposta = await DAO.criaTabelas(query)
        
        return resposta
    }
    
    static async criarQuarto(body){
        const query = `
        INSERT INTO Quartos (numero, tipo, status) VALUES (?,?,?)
        `
        const entidade = [body.numero, body.tipo, body.status]

        const resposta = await DAO.CriarRegistro(query, entidade)

        return resposta
    }

    static async listarTodosOsQuartos(){
        const query = `
        SELECT * FROM Quartos
        `
        const resposta = await DAO.buscarTodosOsRegistros(query)

        return resposta
    }

    static async listarQuartosPorNumero(numero){
        const query = `
         SELECT * FROM Quartos WHERE numero = ?`
        
        const resposta = await DAO.buscarRegistroPorId(query,numero)
        
        return resposta
    }

    static async listarQuartosPorId(id){
        const query = `
         SELECT * FROM Quartos WHERE id = ?`
        
        const resposta = await DAO.buscarRegistroPorId(query,id)
        
        return resposta
    }

    static async deletarQuartosPorID(id){
        const query = `
        DELETE FROM Quartos WHERE id = ?`
        
        const resposta = await DAO.DeletarRegistroPorId(query, id)
        
        return resposta
    }

    static async atualizarQuartosPorID(id, quarto){
        const query = `
        UPDATE Quartos SET (numero, tipo, status) = (?,?,?) WHERE id = ?`
        
        const resposta = await DAO.atualizarRegistroPorId(query, quarto, id)
        
        return resposta
    }
}

export default QuartosDAO





