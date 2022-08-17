
class ValidacoesQuarto {
    static validaNumero(numero) {
        let n = parseInt(numero)
        if (typeof (n) == "number") {
            return true
        } else {
            throw new Error("Digite um número de quarto válido");
        }
    }

}

export default ValidacoesQuarto;