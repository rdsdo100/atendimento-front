import React from 'react';
import CardForms from "../../component/CardForms";
import Input from '../../component/inputs/Input'
import Menu from '../../component/Menu';
import {Container , ContainerInpus} from './styles'



const CadastroUsuario: React.FC = () => {
    return(
        
<Container>
    <Menu></Menu>
        <CardForms>
            <Input placeholder= "Nome"></Input>
            <Input placeholder= "E-mail"></Input>
            <Input placeholder= "Matricula"></Input>
            <Input placeholder= "Grupo usuário"></Input>
            <ContainerInpus>
            <Input placeholder= "Senha" type='password'></Input>
            <Input placeholder= "Nova senha" type='password'></Input>
            </ContainerInpus>


        </CardForms>
</Container>

    )
}
export default CadastroUsuario