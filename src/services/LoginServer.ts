import {apiLogin} from "./api";

export default class LoginServer {


    async  login(user: string, password: string) {
        const login = await apiLogin.get('login', {
            headers: {
                user,
                password
            }
        })

       return login

        
    }




}