import { apiLogin } from "./api";

export default class LoginServer {


    async login(user: string, password: string) {
        const login = await apiLogin.get('login', {
            headers: {
                user,
                password
            }
        })

        if (login.data.message) {
            localStorage.removeItem("Authorization")
            return login.data.usuario
           
        }else{

        localStorage.setItem("Authorization", String(login.data.authorization))
        return login.data
        }

    }


  
}