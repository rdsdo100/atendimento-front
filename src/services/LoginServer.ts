import {apiLogin} from "./api";

export default class LoginServer {


    async  login(user: string, password: string) {
        const login = await apiLogin.get('login', {
            headers: {
                user,
                password
            }
        })

        if (login.data.message){
            localStorage.removeItem("Authorization")
            return  login.data.usuario

        }

        localStorage.setItem("Authorization" , String(login.data.authorization))
    }




}