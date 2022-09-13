import HospedesRepository from "../repository/HospedesRepository.js";

class ValidacoesReserva {

    static async ValidaHospede(id) {
        if (id == 0 || id == undefined || id == null)
            throw new Error("ID do Cliente está inválido, reveja a requisição")

        let cliente = await HospedesRepository.buscarHospedePorId(id);
        if (cliente == null)
            throw new Error("Hospede não encontrado, reveja a requisição ou cadastre o novo hospede")

        return true;
    }

    static ValidaQuarto(idQuarto) {
        if (idQuarto == 0 || idQuarto == null || idQuarto == undefined)
            throw new Error("ID do Quarto está inválido, reveja a requisição")

        return true;
    }


    static ValidaCampoDias(qtdDias) {
        if (qtdDias == 0 || qtdDias == null)
            throw new Error("Quantidade de dias está inválida, reveja a requisição")

        return true;
    }

    static ValidaCamposData(checkIn, checkOut) {
        let dataIni = Date.parse(checkIn);
        let dataFim = Date.parse(checkOut);

        if (dataIni < Date.now)
            throw new Error("Data de Check-In não pode ser menor que a data atual")
        if (dataFim < Date.now)
            throw new Error("Data de Check-out não pode ser menor que a data atual")
        if (dataFim < dataIni)
            throw new Error("Data de Check-out não pode ser menor que a data de Check-in")

        return true;
    }

    static ValidaReservas(idCliente, idQuarto, qtdDias, checkIn, checkOut) {
        const valida =
            this.ValidaHospede(idCliente) &&
            this.ValidaQuarto(idQuarto) &&
            this.ValidaCampoDias(qtdDias) &&
            this.ValidaCamposData(checkIn, checkOut)

        return valida
    }

}

export default ValidacoesReserva