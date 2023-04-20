import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-rvow.onrender.com/'
})

    export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data)
    }

    export const login = async(url: any,dados: any,setDado: any) => { 
        const resposta = await api.post(url,dados)
        setDado(resposta.data.token)
    }

    export const getAll = async(url: any, setDados: any, headers: any) => {
        const resposta = await api.get(url, headers)
        setDados(resposta.data)
      }