import DAO from "./DAO.js";

class HospedesDAO {
    static async criaTabelaHospedes(){
        const query = `
            CREATE TABLE hospedes IF NOT EXIST(
                id,
                nome,
                cpf,
                email,
                telefone
            )
        `

        const resposta = await DAO.criaTabelas(query)
        
        return resposta
    }
}