import express from "express";
import HospedesController from "./controllers/HospedesController.js";
import HospedesDAO from "./DAO/HospedesDAO.js";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

try {
    await HospedesDAO.criaTabelaHospedes()
    console.log("Tabela hospedes criada com sucesso!")
} catch (erro) {
    console.log(erro.message)
}

HospedesController.rotas(app)