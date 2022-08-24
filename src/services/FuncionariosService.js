
class ValidacoesFuncionario{
    static validaNome(nome){
        if(nome.length >= 3){
            return true
        } 
        else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }  

    static validaTurno(turno){
        if(turno.length >= 3){
            return true
        } 
        else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }  

    static validaFuncao(funcao){
        if(funcao.length >= 3){
            return true
        } 
        else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }  
    static validaFuncionario(nome, funcao, turno){
        const valida = 
        this.validaNome(nome) &&
        this.validaFuncao(funcao) &&
        this.validaTurno(turno) 

        return valida
    }
 }

export default ValidacoesFuncionario


