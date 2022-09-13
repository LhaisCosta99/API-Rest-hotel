import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import HospedesController from "./src/controllers/HospedesController.js";
import ReservasController from "./src/controllers/ReservasController.js";
import QuartosController from "./src/controllers/QuartosController.js";
import FuncionariosController from "./src/controllers/FuncionariosController.js";
import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const environment = process.env.ENVIRONMENT || "DEV"
const user = process.env.USER_DB
const password = process.env.PASSWORD
const database = process.env.DATABASE

app.use(express.json())
app.use(cors())

try {
    await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.vqfs4id.mongodb.net/${database}?retryWrites=true&w=majority`)
    console.log("conectado ao mongo")
    app.listen(port, () => {
        if(environment === "PROD")  {
            console.log("Ambiente de produção.")
        }
        console.log(`http://localhost:${port}`)
    })
} catch (error) {
    console.log(error.message)
}


app.get("/", (req, res)=>{
    if(environment === "PROD"){
        res.send(`
        <h1> Bem vindo ao Hotel Transilvania API </h1>
        <h2> Para acessar as rotas das entidades utilize os endereços a seguir: </h2>
        <a> <h3>Hospedes:</h3> https://api-rest-hotel.vercel.app/hospedes </a>
        <br>
        <a> <h3>Reservas:</h3> https://api-rest-hotel.vercel.app/reservas </a>
        <br>
        <a> <h3>Quartos:</h3> https://api-rest-hotel.vercel.app/quartos </a>
        <br>
        <a> <h3>Funcionarios:</h3> https://transilvania-hotel.herokuapp.com/funcionarios </a>
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
    <br>
    <a> <h3>Funcionarios:</h3> http://localhost:${port}/funcionarios</a>
    `)
})

HospedesController.rotas(app)
ReservasController.rotas(app)
QuartosController.rotas(app)
FuncionariosController.rotas(app)