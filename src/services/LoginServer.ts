import {api, apiLogin} from "./api";

export default class LoginServer {


    async  login(user: string, password: string) {
        const login = await apiLogin.get('login', {
            headers: {
                user,
                password
            }
        })

        if (login.data.message){
            return  login.data.usuario
            localStorage.removeItem("Authorization")
        }

        localStorage.setItem("Authorization" , String(login.data.authorization))



    }

    islogin(){

        if (localStorage.getItem("Authorization")) {
            return true
        }
        return false
    }


}