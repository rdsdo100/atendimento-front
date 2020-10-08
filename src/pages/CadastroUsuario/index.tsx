import React from 'react';
import CardForms from "../../component/CardForms";
import Input from '../../component/Input'



const CadastroUsuario: React.FC = () => {
    return(

            <CardForms>
<Input placeholder= "Nome"></Input>
<Input placeholder= "E-mail"></Input>
<Input placeholder= "Senha"></Input>
<Input placeholder= "Nova senha"></Input>
<Input placeholder= "Matricula"></Input>
<Input placeholder= "Grupo usuário"></Input>
</CardForms>

    )
}
export default CadastroUsuario