import {api, apiLogin} from "./api";

export default class Login {


  async  login(usuario: string, senha: string) {
      const login = await apiLogin.get('login', {
            headers: {
                usuario,
                senha
            }
        })



      if (login.data.usuario){
        return  login.data.usuario
          localStorage.removeItem("Authorization")
      }
      if (login.data.senha){
          return  login.data.senha
          localStorage.removeItem("Authorization")
      }

     localStorage.setItem("Authorization" , String(login.data.assinatura))

    }

    islogin(){
      if(!localStorage.getItem("Authorization")){
         return false
      }
      return true
    }


}