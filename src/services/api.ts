import axios from "axios"

const url =  "https://atendimento-back.herokuapp.com"



const api = axios.create({
    baseURL: url,
    headers: {
        authorization: localStorage.getItem("Authorization")
    }

})

const apiLogin = axios.create({
    baseURL: url,

})

export { api , apiLogin}