import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import './Menu.css'

function Menu(){

    function sair (event: FormEvent<HTMLAnchorElement>){
        localStorage.removeItem("Authorization")
    }
    return(
    <div>

        <header></header>
        <input className="chekMenu" id='chk' type='checkbox'/>
        <label  htmlFor="chk" className= "menu-icon"><FiMenu/></label>

      <div className="bg"></div>

        <nav className="menu" id="principal">

            <ul>
                <li>
                    <a className="voltar" href="">Sair</a>
                </li>
                <li>
                    <a  href="#">Home</a>
                </li>
                <li>
                    <a  href="#cursos">Cadastro <span>+</span></a>
                </li>
                <li>
                    <a  href="#">Graficos<span>+</span></a>
                </li>
                <li>
                    <a  href="#">relatorios<span>+</span></a>
                </li>


            </ul>
        </nav>

        <nav className="menu" id="cursos">
           <ul>
               <li>
                   <a className="voltar" href="">Sair</a>
               </li>
            <li>
                <a  href="/home">Home</a>
            </li>
            <li>
                <a  href="/cadastro-atendimento">Cadastro Atendimentos</a>
            </li>
            <li>
                <a  href="/cadastro-usuario">Cadastro Usuário</a>
            </li>
            <li>
                <a  href="/cadastro-empresa">Cadastro Empresa</a>
            </li>
           </ul>
        </nav>



    </div>
    )
}

export default Menu