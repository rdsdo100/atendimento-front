import axios from "axios"

const url =  "http://localhost:3333"



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