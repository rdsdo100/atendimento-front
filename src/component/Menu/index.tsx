import React from 'react'
import {Nav , A , Label, UL, ImMenuIcons, InputCheck , Span} from './styles'

const Menu: React.FC = () => {
    return(
<div>
    
        <div>
            <InputCheck type='checkbox' id='check' ></InputCheck>
            <Label htmlFor="check">
                <Span>
                    <ImMenuIcons/>
                </Span>
            </Label>

            <Nav>

                <UL>
                    <li><A to="/home">Home</A></li>
                    <li><A to="/cadastro-usuario">Usuário</A></li>
                    <li><A to="/cadastro-usuario">Atendimentos</A></li>
                    <li><A to="/cadastro-usuario">Relatórios</A></li>
                    <li><A to='/login'>Sair</A></li>
                </UL>

            </Nav>
        </div>
        </div>

    )
}

export default Menu