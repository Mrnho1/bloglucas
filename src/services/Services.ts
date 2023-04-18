import axios from "axios";
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';

export const api = axios .create({
    baseURL: 'https://blogpessoal-rvow.onrender.com'
})

export const login = async(url: string , dados: Object , setDados: Function) => {
    const resposta  = await api.post(url,dados)
    setDados(resposta.data)
}

export const cadastroUsuario = async(url: string , dados: Object , setDados: Function) => {
    const resposta  = await api.post(url,dados)
    setDados(resposta.data.token)
}