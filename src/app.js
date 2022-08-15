import express from "express";
import HospedesController from "./controllers/HospedesController.js";
import HospedesDAO from "./DAO/HospedesDAO.js";

import ReservasController from "./controllers/ReservasController.js";
import ReservasDAO from "./DAO/ReservasDAO.js";
import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

HospedesController.rotas(app)
ReservasController.rotas(app)

try {
    await HospedesDAO.criaTabelaHospedes();
    console.log("Tabela hospedes criada com sucesso!");
    await ReservasDAO.criaTabelaReservas();
    console.log("Tabela reservas criada com sucesso!");

} catch (erro) {
    console.log(erro.message)
}
