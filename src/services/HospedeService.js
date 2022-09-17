import HospedesRepository from "../repository/HospedesRepository.js"

class HospedeService{
    static async login(payload){
        const email = payload.email
        const senha = payload.senha
        const response = await HospedesRepository.buscarHospedePorEmail(email)
        if(!response){
            throw new Error("")
        }
        if(response.senha != senha){
            throw new Error("Usuario com senha incorreta.")
        }
        return {message: "Usuario autenticado com sucesso!", email}
    }
}

export default HospedeService