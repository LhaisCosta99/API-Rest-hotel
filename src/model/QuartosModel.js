import mongoose from "mongoose";

const Quartos = mongoose.model('Quarto',{
    numero: String,
    tipo: String,
    status: String
})

export default Quartos