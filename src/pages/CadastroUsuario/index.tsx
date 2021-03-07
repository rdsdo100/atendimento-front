import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardForms from "../../component/CardForms";
import InputCadastro from '../../component/inputs/InputCadastro';
import Select from '../../component/inputs/Select';
import Menu from '../../component/Menu';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import {Container} from './styles'

interface IGrupoUsuario {
id: number
nome: string
}

const CadastroUsuario: React.FC = () => {

    const history = useHistory()
    const auth = useSelector((state: ApplicationState) => state.auth.auth)
    const [gupousuarios , setGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const [nome , setNome] = useState<string>()
    const [email , setEmail] = useState<string>()
    const [matrucula , setMatricula] = useState<string>()
    const [grupoUsuario, setGrupoUsuario] = useState<number>()
    const [password , setPassword] = useState<string>()

    useEffect(() => {

        api.get('gupo-usuario',
            { headers: { authorization: auth } })
            .then(response => {
                
            }).catch(erro => {

               
            })

    }, [])




    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

alert("Ta indo!!!!")


    }

    function handleImputNome(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        
    }
    function handleImputEmail(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        
    }
    function handleImputMatricula(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        
    }
    function handleImputGrupoUsuario(event: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target

        
    }
    function handleImputPassword(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        
    }



    return(
<Container>
    <Menu></Menu>
        <CardForms>
            <form onSubmit={handleSubmit}> 
            <InputCadastro onChange={handleImputNome} >Nome</InputCadastro>
            <InputCadastro onChange={handleImputEmail} >E-mail</InputCadastro>
            <InputCadastro onChange={handleImputMatricula} >Matricula</InputCadastro>
            <Select>
            <option key={0}value='0'>Seleciona a Empresa!</option>
            </Select>
            <InputCadastro type='password' onChange={handleImputPassword} >Senha</InputCadastro> 
            <button type='submit' >Cadastrar</button>
            </form>
        </CardForms>
</Container>

    )
}
export default CadastroUsuario