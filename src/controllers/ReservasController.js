import ReservasRepository from "../repository/ReservasRepository.js"
import ValidacoesReserva from "../services/reservasService.js"

class ReservasController {
    static rotas(app) {
        app.get("/Reservas", async (req, res) => {
            try {
                const Reservas = await ReservasRepository.buscarTodasAsReservas()
                res.status(200).json(Reservas)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/Reservas/:id", async (req, res) => {
            try {
                const Reserva = await ReservasRepository.buscarReservaPorId(req.params.id)

                if (!Reserva._id) {
                    throw new Error("Reserva não encontrado para esse id")
                }
                res.status(200).json(Reserva)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/Reservas", async (req, res) => {
            try {
                ValidacoesReserva.ValidaReservas(req.body.idCliente, req.body.idQuarto, req.body.qtdDias, req.body.checkIn, req.body.checkOut)

                const Reserva = req.body

                const inserir = await ReservasRepository.criarReserva(Reserva)

                res.status(201).json(inserir)

            } catch (erro) {
                res.status(400).json({ message: erro.message })
            }
        })

        app.patch("/Reservas/:id", async (req, res) => {
            const id = req.params.id
            const body = Object.entries(req.body)
            try {

                const Reserva = await ReservasRepository.buscarReservaPorId(id)

                if (!Reserva._id) {
                    throw new Error("Reserva não encontrado para esse id")
                }

                body.forEach((elemento) => Reserva[elemento[0]] = elemento[1])

                delete Reserva._id

                ValidacoesReserva.ValidaReservas(req.body.idCliente, req.body.idQuarto, req.body.qtdDias, req.body.checkIn, req.body.checkOut)
                const resposta = await ReservasRepository.atualizaReservaPorId(id, Reserva)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(400).json({ message: erro.message, id })
            }

        })

        app.delete("/Reservas/:id", async (req, res) => {
            const id = req.params.id
            try {

                const Reserva = await ReservasRepository.buscarReservaPorId(id)

                if (!Reserva._id) {
                    throw new Erro("Reserva não encontrado")
                }

                const resposta = await ReservasRepository.deletaReservaPorId(id)

                res.status(200).json(resposta)

            } catch (erro) {
                res.status(404).json({ Erro: erro.message, id })
            }
        })
    }

}

export default ReservasController