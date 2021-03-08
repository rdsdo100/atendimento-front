import { setgroups } from 'node:process';
import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardForms from "../../component/CardForms";
import InputCadastro from '../../component/inputs/InputCadastro';
import Select from '../../component/inputs/Select';
import Menu from '../../component/Menu';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import { Container } from './styles'

interface IGrupoUsuario {
    id: number
    nome: string
}

interface IUsuario {
    nome: string
    email: string
    senha: string
    matricula: string
    grupoUsuario: number
}

const CadastroUsuario: React.FC = () => {

    const history = useHistory()
    const auth = useSelector((state: ApplicationState) => state.auth.auth)
    const [gupoUsuarios, setGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const [nome, setNome] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [matrucula, setMatricula] = useState<string>()
    const [grupoUsuario, setGrupoUsuario] = useState<number>()
    const [password, setPassword] = useState<string>()

    useEffect(() => {

        api.get<IGrupoUsuario[]>('gupo-usuario',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setGrupoUsuarios(resposta)
            }).catch(erro => {
                alert('Erro ao acessar servidor!')
                history.push('/')
            })

    }, [])




    async function handleSubmit(event: FormEvent) {
       
       
        setNome('')
        event.preventDefault()

        
       

        console.log({

            nome,
            email,
            matrucula,
            grupoUsuario,
            password

        })

      //  alert("Ta indo!!!!")


    }

    function handleImputNome(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        
        setNome(String(value))


    }
    function handleImputEmail(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setEmail(String(value))

    }
    function handleImputMatricula(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setMatricula(String(value))

    }
    function handleImputGrupoUsuario(event: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target
        setGrupoUsuario(Number(value))

    }
    function handleImputPassword(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setPassword(String(value))

    }



    return (
        <Container>
            <Menu></Menu>
            <CardForms>
                <form onSubmit={handleSubmit}>
                    <InputCadastro name= 'nome' onChange={handleImputNome} >Nome</InputCadastro>
                    <InputCadastro                   
                    defaultValue = {nome}
                    onChange={handleImputEmail}
                    >E-mail</InputCadastro>
                    <InputCadastro onChange={handleImputMatricula} >Matricula</InputCadastro>
                    <Select onChange={handleImputGrupoUsuario}>
                        <option key={0} value='0'>Seleciona o Grupo de Usuário!</option>
                        {
                            gupoUsuarios.map((grupo: any) => {

                                return <option key={grupo.id} value={grupo.id}>{`${String(grupo.id)} - ${String(grupo.nome)} `}</option>
                            })
                        }
                    </Select>
                    <InputCadastro type='password' onChange={handleImputPassword} >Senha</InputCadastro>
                    <button type='submit' >Cadastrar</button>
                </form>
            </CardForms>
        </Container>

    )
}
export default CadastroUsuario