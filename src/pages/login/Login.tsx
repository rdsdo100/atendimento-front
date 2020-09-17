import React, {ChangeEvent} from "react";
import {useHistory} from 'react-router-dom'
import './index.css'
import LoginServer from "../../services/LoginServer";

const Login = ()=>{
    const loginServer = new LoginServer()
    const history = useHistory()

    async function logar(element: ChangeEvent<HTMLFormElement>){
        element.preventDefault()


 const message = await loginServer.login(
    String(element.target.login.value),
    String(element.target.senha.value),
)
      console.log(localStorage.getItem('Authorization'))
        history.push('/home')



    }


    return(
        <div className="login">

            <form onSubmit={logar} className="login" action="">
            <input name="login" className="login" placeholder='Login' type="text"/>

            <input className="login"  name="senha" placeholder='Senha' type="password"/>

            <button className="login" type="submit">Entrar</button>
            </form>
        </div>

    )
}

export default Login