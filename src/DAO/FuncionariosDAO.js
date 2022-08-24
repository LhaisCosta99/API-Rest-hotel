import DAO from "./DAO.js";

class FuncionariosDAO {
    static async criaTabelaFuncionarios(){
        const query = `
        CREATE TABLE IF NOT EXISTS funcionarios (
                id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                nome VARCHAR,
                funcao VARCHAR,
                turno VARCHAR
            )
        `

        const resposta = await DAO.criaTabelas(query)
        
        return resposta
    }
    
    static async criarFuncionario(body){
        const query = `
        INSERT INTO funcionarios (nome, funcao, turno) VALUES (?,?,?)
        `
        const entidade = [body.nome, body.funcao, body.turno]

        const resposta = await DAO.CriarRegistro(query, entidade)

        return resposta
    }

    static async listarTodosOsFuncionarios(){
        const query = `
        SELECT * FROM funcionarios
        `
        const resposta = await DAO.buscarTodosOsRegistros(query)

        return resposta
    }

    static async listarFuncionariosPorID(id){
        const query = `
         SELECT * FROM funcionarios WHERE id = ?`
        
        const resposta = await DAO.buscarRegistroPorId(query,id)
        
        return resposta
    }

    static async deletarFuncionarioPorID(id){
        const query = `
        DELETE FROM funcionarios WHERE id = ?`
        
        const resposta = await DAO.DeletarRegistroPorId(query, id)
        
        return resposta
    }

    static async atualizarFuncionarioPorID(id, funcionario){
        const query = `
        UPDATE funcionarios SET (nome, funcao, turno) = (?,?,?) WHERE id = ?`
        
        const resposta = await DAO.atualizarRegistroPorId(query, funcionario, id)
        
        return resposta
    }

}

export default FuncionariosDAO