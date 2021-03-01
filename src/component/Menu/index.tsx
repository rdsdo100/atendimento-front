import React from 'react'
import {Nav , A , Label, UL, ImMenuIcons, InputCheck , Span} from './styles'

const Menu: React.FC = () => {
    return(

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
                    <li><A to="/cadastro-usuario">Cadastro Usuário</A></li>
                    <li><A to='/cadastro-medidas'>Cadastro Medidas</A></li>
                    <li><A to='/cadastro-dieta'>Cadastro Dieta</A></li>
                    <li><A to='/cadastro-exercicio'>Cadastro Exercicio</A></li>
                    <li><A to='/cadastro-treino'>Cadastro Treino</A></li>
                    <li><A to='/cadastro-academia'>Cadastro Academia</A></li>
                    <li><A to='/login'>Sair</A></li>
                </UL>

            </Nav>

        </div>

    )
}

export default Menu