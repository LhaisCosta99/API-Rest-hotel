import express from "express";
import HospedesController from "./controllers/HospedesController.js";
import HospedesDAO from "./DAO/HospedesDAO.js";

import QuartosController from "./controllers/QuartosController.js";
import QuartosDAO from "./DAO/QuartosDAO.js";

import cors from "cors"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

HospedesController.rotas(app)
QuartosController.rotas(app)

try {
    
    await HospedesDAO.criaTabelaHospedes();
    console.log("Tabela hospedes criada com sucesso!");
    
    await QuartosDAO.criaTabelaQuartos();
    console.log("Tabela quartos criada com sucesso!");
    
} catch (erro) {
    console.log(erro.message)
}
