import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "./Menu.css"
function Menu(){

    function sair (event: FormEvent<HTMLAnchorElement>){
        localStorage.removeItem("Authorization")
    }
    return(
    <div>
        <input id='chek' type='checkbox'/>
        <label htmlFor="chek" ><FiMenu/></label>
        <nav>
            <ul>
                <li>
                    <Link  to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro-atendimento">Cadastro Atendimentos</Link>
                </li>
                <li>
                    <Link  to="/cadastro-usuario">Cadastro Usuário</Link>
                </li>
                <li>
                    <Link to="/cadastro-empresa">Cadastro Empresa</Link>
                </li>
                <li>
                    <Link onClick={sair} to="/">Sair</Link>
                </li>

            </ul>
        </nav>
    </div>
    )
}

export default Menu