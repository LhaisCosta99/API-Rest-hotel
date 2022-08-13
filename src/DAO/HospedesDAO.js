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
        INSERT INTO hospedes (nome, cpf, email, telefone) values (?,?,?,?)
        `
        const entidade = [body.nome, body.cpf, body.email, body.telefone]

        const resposta = await DAO.CriarRegistro(query, entidade)

        return resposta
    }
}

export default HospedesDAO