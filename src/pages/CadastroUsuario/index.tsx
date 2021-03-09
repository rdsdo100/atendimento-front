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
    const auth =  localStorage.getItem("Authorization")
    const [gupoUsuarios, setGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [matricula, setMatricula] = useState<string>('')
    const [grupoUsuario, setGrupoUsuario] = useState<number>(0)
    const [password, setPassword] = useState<string>('')

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

        const envio: IUsuario = {
            nome: String(nome),
            email: String(email),
            matricula: String(matricula),
            grupoUsuario: Number(grupoUsuario),
            senha: String(password)
        }

        setNome('')
        setEmail('')
        setMatricula('')
        setPassword('')
        setGrupoUsuario(0)
       

        api.post('user', envio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                console.log(response)
                alert(resposta)
               
            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')
                //  history.push('/')
            })

            console.log(auth)
           
            event.preventDefault()
           

       


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
            <CardForms titulo={"Cadastro de Usuário"} >
                <form >
                    <InputCadastro
                        onChange={handleImputNome}
                        defaultValue={nome}>
                        Nome
                    </InputCadastro>

                    <InputCadastro
                        defaultValue={email}
                        onChange={handleImputEmail}>
                        E-mail
                    </InputCadastro>

                    <InputCadastro
                        onChange={handleImputMatricula}
                        defaultValue={matricula}>
                        Matricula
                        </InputCadastro>
                    <Select
                        onChange={handleImputGrupoUsuario}
                        defaultValue={grupoUsuario}>
                            
                        <option key={0} value='0'>Seleciona o Grupo de Usuário!</option>
                        {
                            gupoUsuarios.map((grupo: any) => {
                                return <option key={grupo.id} value={grupo.id}>{`${String(grupo.id)} - ${String(grupo.nome)} `}</option>
                            })
                        }
                    </Select>

                    <InputCadastro
                        type='password'
                        onChange={handleImputPassword}
                        defaultValue={password}>
                        Senha
                        </InputCadastro>

                    <button
                        type='submit' onSubmit={handleSubmit} >
                        Cadastrar
                         </button>

                </form>
            </CardForms>
        </Container>

    )
}
export default CadastroUsuario