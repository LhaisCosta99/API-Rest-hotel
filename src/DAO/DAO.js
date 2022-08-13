import Database from "sqlite3";

class DAO {
    static async criaTabelas(query){
        const resposta = await Database.run(query)
        return resposta
    }
}

export default DAO