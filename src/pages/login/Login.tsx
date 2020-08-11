import React from "react";
import Menu from "../../componets/menu/Menu"
import './index.css'

const Login = ()=>{

    return(
        <div className="login">

            <input className="login" placeholder='Login' type="text"/>


            <input className="login"     placeholder='Senha' type="password"/>

            <button className="login" type="submit">Entrar</button>
        </div>

    )
}

export default Login