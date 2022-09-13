import mongoose from "mongoose";

const Reservas = mongoose.model('Reserva',{
    idCliente: String,
    qtdDias: String,
    checkIn: String,
    checkOut: String,
    idQuarto: String
})

export default Reservas;