import express from "express";
import HospedesController from "./controllers/HospedesController.js";
import HospedesDAO from "./DAO/HospedesDAO.js";

import ReservasController from "./controllers/ReservasController.js";
import ReservasDAO from "./DAO/ReservasDAO.js";

import QuartosController from "./controllers/QuartosController.js";
import QuartosDAO from "./DAO/QuartosDAO.js";

import cors from "cors"

const app = express()
const port = process.env.PORT || 3000
const environment = process.env.ENVIRONMENT || "DEV"

app.use(express.json())
app.use(cors("https://transilvania-hotel.herokuapp.com"))

app.listen(port, () => {
    if(environment === "PROD")  {
        console.log()
    }
    console.log(`http://localhost:${port}`)
})

app.get("/", (req, res)=>{
    if(environment === "PROD"){
        res.send(`
        <h1> Bem vindo ao Hotel Transilvania API </h1>
        <h2> Para acessar as rotas das entidades utilize os endereços a seguir: </h2>
        <a> <h3>Hospedes:</h3> https://transilvania-hotel.herokuapp.com/hospedes </a>
        <br>
        <a> <h3>Reservas:</h3> https://transilvania-hotel.herokuapp.com/reservas </a>
        <br>
        <a> <h3>Quartos:</h3> https://transilvania-hotel.herokuapp.com/quartos </a>
        `)
    }
    res.send(`
    <h1> Bem vindo ao Hotel Transilvania API </h1>
    <h2> Para acessar as rotas das entidades utilize os endereços a seguir: </h2>
    <a> <h3>Hospedes:</h3> http://localhost:${port}/hospedes </a>
    <br>
    <a> <h3>Reservas:</h3> http://localhost:${port}/reservas </a>
    <br>
    <a> <h3>Quartos:</h3> http://localhost:${port}/quartos </a>
    `)
})

HospedesController.rotas(app)
ReservasController.rotas(app)
QuartosController.rotas(app)

try {
    await HospedesDAO.criaTabelaHospedes();
    console.log("Tabela hospedes criada com sucesso!");
    await ReservasDAO.criaTabelaReservas();
    console.log("Tabela reservas criada com sucesso!");
    await QuartosDAO.criaTabelaQuartos();
    console.log("Tabela quartos criada com sucesso!");
} catch (erro) {
    console.log(erro.message)
}
