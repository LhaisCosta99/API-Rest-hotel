import mongoose from "mongoose";

const Quartos = mongoose.model('Quarto',{
    imagem: String,
    numero: String,
    tipo: String,
    status: String
})

export default Quartos