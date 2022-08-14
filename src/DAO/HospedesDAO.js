import DAO from "./DAO.js";

class HospedesDAO {
    static async criaTabelaHospedes(){
        const query = `
        CREATE TABLE IF NOT EXISTS hospedes (
                id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                nome VARCHAR,
                cpf VARCHAR,
                email VARCHAR,
                telefone VARCHAR
            )
        `

        const resposta = await DAO.criaTabelas(query)
        
        return resposta
    }
    
    static async criarHospede(body){
        const query = `
        INSERT INTO hospedes (nome, cpf, email, telefone) VALUES (?,?,?,?)
        `
        const entidade = [body.nome, body.cpf, body.email, body.telefone]

        const resposta = await DAO.CriarRegistro(query, entidade)

        return resposta
    }

    static async listarTodosOsHospedes(){
        const query = `
        SELECT * FROM hospedes
        `
        const resposta = await DAO.buscarTodosOsRegistros(query)

        return resposta
    }

    static async listarHospedesPorID(id){
        const query = `
         SELECT * FROM hospedes WHERE id = ?`
        
        const resposta = await DAO.buscarRegistroPorId(query,id)
        
        return resposta
    }

    static async deletarHospedesPorID(id){
        const query = `
        DELETE FROM hospedes WHERE id = ?`
        
        const resposta = await DAO.DeletarRegistroPorId(query, id)
        
        return resposta
    }

    static async atualizarHospedesPorID(id, hospede){
        const query = `
        UPDATE hospedes SET (nome, cpf, email, telefone) = (?,?,?,?) WHERE id = ?`
        
        const resposta = await DAO.atualizarRegistroPorId(query, hospede, id)
        
        return resposta
    }
}

export default HospedesDAO