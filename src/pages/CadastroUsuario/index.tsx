
import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import CardUsuario from '../../component/CardUsuario';
import { Button } from '../../component/CardUsuario/styles';
import InputCadastro from '../../component/inputs/InputCadastro';
import Select from '../../component/inputs/Select';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';
import { Container, DivuttonEnviar, DivButtonEditar } from './styles'


interface IButton {
    display?: string
}

interface IGrupoUsuario {
    id: number
    nome: string
}

interface IUsuario {
    id?: number
    nome: string
    email: string
    senha: string
    matricula: string
    grupoUsuario: number

}

interface IGetUsuario {
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

    const [listUsuarios, setListUsuarios] = useState<IGetUsuario[]>([])
    const [message, setMessage] = useState<string>('')
    const [idDeleteUsuario, setIdDeleteUsuario] = useState<number>()
    const [idEditUsuario, setIdEditUsuario] = useState<number>()
    const [idCadastroUsuario, setIdCadastroUsuario] = useState<number>()
    const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'flex' })
    const [butonEdit, setButtonEdit] = useState<IButton>({ display: 'none' })
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [matricula, setMatricula] = useState<string>('')
    const [grupoUsuario, setGrupoUsuario] = useState<number>(0)
    const [password, setPassword] = useState<string>('')
    const [gupoUsuarios, setGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const auth = localStorage.getItem("Authorization")
 
    useEffect(() => {

        api.get<IGrupoUsuario[]>('gupo-usuario',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setGrupoUsuarios(resposta)
            }).catch(erro => {
                alert('Erro ao acessar servidor!')
               
            })

    }, [])

    useEffect(() => {

        api.get<IGetUsuario>('user',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setListUsuarios(resposta)


            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')
                
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
        const nome = event.target.value

        setNome(String(nome))


    }
    function handleImputEmail(event: ChangeEvent<HTMLInputElement>) {
        const emailUsuario = event.target.value
        setEmail(String(emailUsuario))

    }
    function handleImputMatricula(event: ChangeEvent<HTMLInputElement>) {
        const matricula = event.target.value
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

  /*  function limparCampos() {

        if ((document.getElementById("id_empresa")) &&
            (document.getElementById("codigo_empresas")) &&
            (document.getElementById("nome_empresas"))) {

            (document.getElementById("id_empresa") as HTMLInputElement).value = "";
            (document.getElementById("codigo_empresas") as HTMLInputElement).value = "";
            (document.getElementById("nome_empresas") as HTMLInputElement).value = "";
        }
    }
*/
/*
    function carregarCampos(idEmpresa: string, codigoEmpresa: string, nomeEmpresa: string) {

        if ((document.getElementById("id_empresa")) &&
            (document.getElementById("codigo_empresas")) &&
            (document.getElementById("nome_empresas"))) {

            (document.getElementById("id_empresa") as HTMLInputElement).value = idEmpresa;
            (document.getElementById("codigo_empresas") as HTMLInputElement).value = codigoEmpresa;
            (document.getElementById("nome_empresas") as HTMLInputElement).value = nomeEmpresa;

        }

        if ((document.getElementById("tab1Usuario")) &&
            (document.getElementById("tab2Usuario"))) {
            (document.getElementById("tab1Usuario") as HTMLInputElement).checked = true;
            (document.getElementById("tab2Usuario") as HTMLInputElement).checked = false;

        }
    }
    */

        /*
        const handleDelete = (idDelete: number) => {
    
            api.delete<string>(`empresa/${idDelete}`,
                { headers: { authorization: auth } })
                .then(response => {
                    const resposta: any = response.data
    
                    setMessage(String(resposta))
                    setIdDeleteEmpresa(idDelete)
    
                }).catch(erro => {
    
                    alert('Não enviado!')
    
                })
        }
    
       */


    /*
        function updateEmpresa(idEdit: number) {
    
            const ativarButton: IButton = { display: 'flex' }
            const desativarButton: IButton = { display: 'none' }
            setButtonEdit(ativarButton)
            setButtonEnviar(desativarButton)
    
    
    
            const empresaEdit = listEmpresas.find(item => item.id === idEdit)
    
    
    
    
            carregarCampos(
                String(empresaEdit?.id),
                String(empresaEdit?.codigoEmpresa),
                String(empresaEdit?.nomeEmpresa)
                )
    
        }*/


    /*   const handlePut = () => {
   
           let putEmpresa: IEmpresas
   
           if ((document.getElementById("id_empresa"))
               && (document.getElementById("codigo_empresas"))
               && (document.getElementById("nome_empresas"))) {
               putEmpresa = {
                   nomeEmpresa: String((document.getElementById("nome_empresas") as HTMLInputElement).value),
                   codigoEmpresa: String((document.getElementById("codigo_empresas") as HTMLInputElement).value),
                   id: Number((document.getElementById("id_empresa") as HTMLInputElement).value),
               }
   
           
   
   
               api.put(`empresa`, putEmpresa,
                   { headers: { authorization: auth } })
                   .then(response => {
                       const resposta: any = response.data
   
                       const ativarButton: IButton = { display: 'flex' }
                       const desativarButton: IButton = { display: 'none' }
                       setButtonEdit(desativarButton)
                       setButtonEnviar(ativarButton)
   
                       limparCampos()
   
                       setMessage(String(resposta))
                      
                       setIdEditEmpresa(putEmpresa.id)
   
                   }).catch(erro => {
   
                       alert('Não enviado!')
   
                   })
           }
       }
   
   */
  /*

    function handleCancelar() {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(desativarButton)
        setButtonEnviar(ativarButton)

        limparCampos()

    }
*/

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

                            <DivuttonEnviar style={butonEnviar} >
                                <Button style={{ background: "green" }} type="submit" >Enviar</Button>
                            </DivuttonEnviar>
                            <DivButtonEditar style={butonEdit}>
                                <Button style={{ background: "yellow", color: '#000' }} type="button" onClick={() => { }} >Editar</Button>
                                <Button type="button" style={{ background: "#e44c4e", color: '#bfbfbf' }} onClick={() => { }}  >Cancelar</Button>
                            </DivButtonEditar>


                        </form>
                    </Tabs>
                    <Tabs IdNameTab="tab2Usuario" text='Lista de Usuarios'>
                        <CardListTab>
                            {
                                listUsuarios.map((user: any) => {

                                    return <CardUsuario
                                        key={user.id}
                                        id={user.id}
                                        nomeUsuario={user.nomeUsuario}
                                        matricula={user.matricula}
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