import axios from 'axios'

/**
 * 'Axios' serve para o FRONTEND fazer requisições HTTP ao BACKEND
 * Cria uma instância do 'Axios' e define o 'baseURL'
 * 'baseURL' serve para definir qual é o link do backend
 */
export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

