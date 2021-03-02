import axios from "axios"

const local =  "http://localhost:3333"

const url = local

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