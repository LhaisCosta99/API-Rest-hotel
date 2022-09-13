import Funcionarios from "../model/FuncionariosModel.js";
import RepositoryGeneral from "./RepositoryGeneral.js";

class FuncionariosRepository {
    static async criarFuncionario(funcionario){
        const response =  await RepositoryGeneral.criar(Funcionarios, funcionario)
        return response
    }

    static async buscarTodosOsFuncionarios(){
        const response = await RepositoryGeneral.buscarTodos(Funcionarios)
        return response
    }

    static async buscarFuncionarioPorId(id){
        const response = await RepositoryGeneral.buscarPorId(Funcionarios, id)
        return response
    }

    static async atualizaFuncionarioPorId(id, funcionario){
        const response = await RepositoryGeneral.atualizaPorId(Funcionarios, id, funcionario)
        return response
    }

    static async deletaFuncionarioPorId(id){
        const response = await RepositoryGeneral.deletarPorId(Funcionarios, id)
        return response
    }
}

export default FuncionariosRepository;