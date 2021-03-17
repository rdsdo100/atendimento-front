import React from 'react'
import { Nav, A, Label, UL, ImMenuIcons, InputCheck, Span } from './styles'

const Menu: React.FC = () => {



    function sairSistema() {
        localStorage.removeItem("Authorization")
    }

    return (
        <div>

            <div>
                <InputCheck type='checkbox' id='check' ></InputCheck>
                <Label htmlFor="check">
                    <Span>
                        <ImMenuIcons />
                    </Span>
                </Label>

                <Nav>

                    <UL>
                        <li><A to="/home">Home</A></li>
                        <li><A to="/atendimentos"   >Atendimentos</A></li>
                        <li><A to="/empresas">Empresas</A></li>
                        <li><A to="/cadastro-usuario">Usuário</A></li>
                        <li><A to="/graficos">Graficos</A></li>
                        <li><A to='/' onChange={() => { sairSistema() }} >Sair</A></li>
                    </UL>

                </Nav>
            </div>
        </div>

    )
}

export default Menu