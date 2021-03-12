
import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardUsuario from '../../component/CardUsuario';
import InputCadastro from '../../component/inputs/InputCadastro';
import Select from '../../component/inputs/Select';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';
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

interface IGetUsuario{
    id: number
    nomeUsuario?: string,
    email?: string,
    matricula?: string,
    ativo?: boolean,
    bloqueado?: boolean,
    grupoUsuariosId?: number
    grupoUsuariosNome?: string
}

const CadastroUsuario: React.FC = () => {

    const history = useHistory()
    const auth = localStorage.getItem("Authorization")
    const [gupoUsuarios, setGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const [usuarios, setUsuarios] = useState<IGetUsuario[]>([])
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

useEffect(()=>{

    api.get<IGetUsuario>('user', 
    { headers: { authorization: auth } })
    .then(response => {
        const resposta: any = response.data

       setUsuarios(resposta)
       

    })
    .catch(erro => {
        alert('Erro ao acessar servidor!')
        //  history.push('/')
    })

},[])


    async function handleSubmit(event: FormEvent) {

        const envio: IUsuario = {
            nome: String(nome),
            email: String(email),
            matricula: String(matricula),
            grupoUsuario: Number(grupoUsuario),
            senha: String(password)
        }

        api.post('user', envio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                alert(resposta)
                setNome('')
                setEmail('')
                setMatricula('')
                setPassword('')
                setGrupoUsuario(0)

            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')
                //  history.push('/')
            })

    }

    function handleImputNome(event: ChangeEvent<HTMLInputElement>) {
        const nome  = event.target.value

        setNome(String(nome))


    }
    function handleImputEmail(event: ChangeEvent<HTMLInputElement>) {
        const emailUsuario  = event.target.value
        setEmail(String(emailUsuario))

    }
    function handleImputMatricula(event: ChangeEvent<HTMLInputElement>) {
        const matricula  = event.target.value
        setMatricula(String(matricula))

    }
    function handleImputGrupoUsuario(event: ChangeEvent<HTMLSelectElement>) {
        const grupoUsuario = event.target.value
        setGrupoUsuario(Number(grupoUsuario))

    }
    function handleImputPassword(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setPassword(String(value))

    }

    return (
        <Container>
            <LayoutPrincipal titulo='Usuarios'>

                <Tab>
                    <Tabs IdNameTab="tab1Usuario"
                        defaultCheckedTab={true}
                        text='Cadastrar Usuário'>
                        <form onSubmit={handleSubmit}>
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
                                type='submit'  >
                                Cadastrar
                         </button>

                        </form>
                    </Tabs>
                    <Tabs IdNameTab="tab2Usuario" text='Lista de Usuarios'>
                        <CardListTab>
{
    usuarios.map((user:any)=>{

        return <CardUsuario
        key={user.id}
        id={user.id}
        nomeUsuario={user.nomeUsuario} 
        matricula = {user.matricula}
        />
    })

}
                        </CardListTab>
                    </Tabs>

                </Tab>


            </LayoutPrincipal>
        </Container>

    )
}
export default CadastroUsuario