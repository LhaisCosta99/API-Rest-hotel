import mongoose from "mongoose";

const Hospedes = mongoose.model('Hospede',{
    nome: String,
    cpf: String,
    email: String,
    telefone: String
})

export default Hospedes