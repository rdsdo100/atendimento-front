import React, {FormEvent} from "react";
import {Link} from "react-router-dom";
import './Menu.css'
import { FiMenu } from "react-icons/fi";


function Menu(){

    function sair (event: FormEvent<HTMLAnchorElement>){
        localStorage.removeItem("Authorization")
    }
    return(

    <div>

     {/*   <header></header>*/}
        <input className="chekMenu" id='chk' type='checkbox'/>
        <label  htmlFor="chk" className= "menu-icon"><FiMenu/></label>

      <div className="bg"></div>

        <nav className="menu" id="principal">

            <ul>
                <li>
                    <a className="voltar" href="">Sair</a>
                </li>
                <li>
                    <a href="/cadastro-atendimento">Home</a>
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

  {/* <nav className="menu" id="cursos">
           <ul>
               <li>
                   <a className="voltar" href="">Sair</a>
               </li>
            <li>
                <a  href="/home">Home</a>
            </li>
            <li>
                <Link  to="/cadastro-atendimento">Cadastro Atendimentos</Link>
            </li>
            <li>
                <a  href="/cadastro-usuario">Cadastro Usuário</a>
            </li>
            <li>
                <a  href="/cadastro-empresa">Cadastro Empresa</a>
            </li>
           </ul>
        </nav>*/}



    </div>
    )
}

export default Menu