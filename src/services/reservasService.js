import hospedeDAO from "../DAO/HospedesDAO"
class ValidacoesReserva {

    static ValidaHospede(id) {
        if (id == 0 || id == null)
            throw "ID do Cliente está inválido, reveja a requisição"

        let cliente = hospedeDAO.listarHospedesPorID(id);
        if (cliente == null)
            throw "Hospede não encontrado, reveja a requisição ou cadastre o novo hospede"

        return true;
    }

    static ValidaQuarto(idQuarto) {
        if (idQuarto == 0 || idQuarto == null)
            throw "ID do Quarto está inválido, reveja a requisição"

        // let Quarto = quartoDAO.listarQuartoPorID(id);
        // if (Quarto == null)
        //     throw "Quarto não cadastrado, reveja a requisição ou cadastre o quarto"


        return true;
    }


    static ValidaCampoDias(qtdDias) {
        if (qtdDias == 0 || qtdDias == null)
            throw "Quantidade de dias está inválida, reveja a requisição"

        return true;
    }

    static ValidaCamposData(checkIn, checkOut) {
        let dataIni = Date.parse(checkIn);
        let dataFim = Date.parse(checkOut);

        if (dataIni < Date.now)
            throw "Data de Check-In não pode ser menor que a data atual"
        if (dataFim < Date.now)
            throw "Data de Check-out não pode ser menor que a data atual"
        if (dataFim < dataIni)
            throw "Data de Check-out não pode ser menor que a data de Check-in"
        
            return true;
    }

}