import mongoose from "mongoose";

const Funcionarios = mongoose.model('Funcionario',{
    nome: String,
    funcao: String,
    turno: String
})

export default Funcionarios;