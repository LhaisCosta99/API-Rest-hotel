class Validacoesfuncionario{
    static validaNome(nome){
        if(nome.length >= 3){
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

    static validaturno(turno){
        if(turno.length >= 3){
            return true
        } 
        else {
            throw new Error("Nome inválido, deve ter no mínimo 3 caracteres")
        }
    }
    static validaFuncionario(nome, turno, funcao){
        const valida = 
        this.validaNome(nome) &&
        this.validaTurno(turno) &&
        this.validaFuncao(funcao) 


        return valida
    }
}

export default Validacoesfuncionario


