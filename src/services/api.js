import axios from "axios";

//url da api: https://sujeitoprogramador.com/rn-api/?api=posts
const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/rn-api/'
})

export default api;