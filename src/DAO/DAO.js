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

    static buscarTodosOsRegistros(query){
        return new Promise((resolve, reject) => {
            Database.all(query, (erro, resultado) => {
                if(erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }

    static buscarRegistroPorId(query, id){
        return new Promise((resolve, reject) => {
            Database.get(query, id, (erro, resultado) => {
                if(erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }

    static atualizarRegistroPorId(query, entidade, id){
        return new Promise((resolve, reject) => {
            Database.run(query, [...entidade, id] , (erro, resultado) => {
                if(erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
    static DeletarRegistroPorId(query, id){
        return new Promise((resolve, reject) => {
            Database.run(query, id, (erro, resultado) => {
                if(erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }

    static CriarRegistro(query, entidade){
        return new Promise((resolve, reject) => {
            Database.run(query, entidade, (erro, resultado) => {
                if(erro) {
                    reject(erro)
                }
                else {
                    resolve(resultado)
                }
            })
        })
    }
}

export default DAO