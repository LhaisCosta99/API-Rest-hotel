import Database from "../infra/database.js"

class DAO {
    static criaTabelas(query){
        return new Promise((resolve, reject) => {
            Database.run(query, (erro) => {
                if(erro) {
                    reject(erro)
                }
            })
        })
    }
}

export default DAO