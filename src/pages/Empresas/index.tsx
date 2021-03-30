import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import CardListEmpresas from '../../component/cards/CardListEmpresas';
import { Button } from '../../component/cards/CardUsuario/styles';
import InputCadastro from '../../component/inputs/InputCadastro';
import InputId from '../../component/inputs/InputId';
import Select from '../../component/inputs/Select';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tabs } from '../../component/TabsComponents';
import Tab from '../../component/TabsComponents/Tab';
import { api } from '../../services/api';
import { Container, Form ,DivButtonEnviar , DivButtonEditar } from './styles'

interface IEmpresas {
    id?: number 
    codigoEmpresa : string 
    nomeEmpresa : string 
    grupoEmpresa : number
}
interface IButton {
    display?: string
}

interface IGrupoEmpresa {
    id: number
    grupoEmpresa: string
}

const Empresas: React.FC = () => {

     // const auth = useSelector((state: ApplicationState) => state.auth.auth)
   const auth = localStorage.getItem('Authorization')
const [listEmpresas , setLisEmpresas] = useState<IEmpresas[]>([])
const [listGrupoEmpresas , setListGrupoEmpresas] = useState<IGrupoEmpresa[]>([])
const [message ,setMessage] = useState<string>('')
const [nomeEmpresa ,setNomeEmpresa] = useState<string>('')
const [codigoEmpresa ,setCodigoEmpresa] = useState<string>('')
const [grupoEmpresa ,setGrupoEmpresa] = useState<number>()
const [idDeleteEmpresa ,setIdDeleteEmpresa] = useState<number>()
const [idEditEmpresa ,setIdEditEmpresa] = useState<number>()
const [idCadastro , setIdCadastro] = useState<number>()
const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'flex' })
const [butonEdit, setButtonEdit] = useState<IButton>({ display: 'none' })

    
useEffect(() => {

        api.get<IEmpresas>('empresa',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setLisEmpresas(resposta)
                   
            }).catch(erro => {

            })

    }, [idDeleteEmpresa, idCadastro, idEditEmpresa])

    useEffect(() => {

        api.get<IGrupoEmpresa>('grupo-empresa',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListGrupoEmpresas(resposta)
               
            }).catch(erro => {

            })

    }, [])

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

    async function handleSubmitEmpresa(event: FormEvent) {
        event.preventDefault()


        event.preventDefault()
        const respostaEnvio: IEmpresas = {
            codigoEmpresa: String(codigoEmpresa),
            nomeEmpresa: String(nomeEmpresa),
            grupoEmpresa: Number(grupoEmpresa)
        }
        api.post<IEmpresas>('empresa', respostaEnvio,
            { headers: { authorization: auth } })
            .then(response => {

                const resposta: any = response.data
                setIdCadastro(Number(resposta.id))
                alert('Salvo!')

                limparCampos()

            }).catch(erro => {

                alert('Não enviado!')

            })

        alert("Ta indo!!!!")
        limparCampos()

    }

    function limparCampos() {

        if ((document.getElementById("id_empresa")) &&
            (document.getElementById("codigo_empresas")) &&
            (document.getElementById("codigo_empresas")) &&
            (document.getElementById("grupo_empresas"))) {

            (document.getElementById("id_empresa") as HTMLInputElement).value = "";
            (document.getElementById("codigo_empresas") as HTMLInputElement).value = "";
            (document.getElementById("nome_empresas") as HTMLInputElement).value = "";
            (document.getElementById("grupo_empresas") as HTMLInputElement).value = "0";
            
        }
    }

    function carregarCampos(idEmpresa: string, codigoEmpresa: string, nomeEmpresa: string, grupoEmpresa: string) {
 
        if ((document.getElementById("id_empresa")) &&
        (document.getElementById("codigo_empresas")) &&
        (document.getElementById("codigo_empresas")) &&
        (document.getElementById("grupo_empresas"))) {

            (document.getElementById("id_empresa") as HTMLInputElement).value = idEmpresa;
            (document.getElementById("codigo_empresas") as HTMLInputElement).value = codigoEmpresa;
            (document.getElementById("nome_empresas") as HTMLInputElement).value = nomeEmpresa;
            (document.getElementById("grupo_empresas") as HTMLInputElement).value = grupoEmpresa;
            
        }

        if ((document.getElementById("tab1Empresas")) &&
            (document.getElementById("tab2Empresas"))) {
            (document.getElementById("tab1Empresas") as HTMLInputElement).checked = true;
            (document.getElementById("tab2Empresas") as HTMLInputElement).checked = false;

        }
    }


    function updateEmpresa(idEdit: number) {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(ativarButton)
        setButtonEnviar(desativarButton)



        const empresaEdit = listEmpresas.find(item => item.id === idEdit)

        carregarCampos(
            String(empresaEdit?.id),
            String(empresaEdit?.codigoEmpresa),
            String(empresaEdit?.nomeEmpresa),
            String(empresaEdit?.grupoEmpresa)
            )

    }


    const handlePut = () => {

        let putEmpresa: IEmpresas

        if ((document.getElementById("id_empresa"))
            && (document.getElementById("codigo_empresas"))
            && (document.getElementById("nome_empresas"))) {
            putEmpresa = {
                nomeEmpresa: String((document.getElementById("nome_empresas") as HTMLInputElement).value),
                codigoEmpresa: String((document.getElementById("codigo_empresas") as HTMLInputElement).value),
                id: Number((document.getElementById("id_empresa") as HTMLInputElement).value),
                grupoEmpresa: Number((document.getElementById("id_empresa") as HTMLInputElement).value),
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



    function handleCancelar() {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(desativarButton)
        setButtonEnviar(ativarButton)

        limparCampos()

    }



    function handleImputCodigoEmpresa(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setCodigoEmpresa(String(value))
    }
    
    function handleImputNomeEmpresa(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setNomeEmpresa(String(value))
    }
    

    function handleImputGrupoEmpresas(event: ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target
        setGrupoEmpresa(Number(value))
    }

    return (

        <Container>
            <LayoutPrincipal titulo='Empresas'>

                <Tab>
                    <Tabs IdNameTab="tab1Empresas"
                        defaultCheckedTab={true}
                        text='Cadastrar Empresa'>

                        <Form onSubmit={handleSubmitEmpresa} >


                        <div style={butonEdit}>
                                <InputId  id="id_empresa" defaultValue="0"  >Id</InputId>
                            </div>
                            
                            <InputCadastro  id="codigo_empresas" defaultValue={""} onChange={handleImputCodigoEmpresa} >Codigo da Empresa</InputCadastro>
                            <InputCadastro id="nome_empresas" defaultValue={""} onChange={handleImputNomeEmpresa}>Nome da Empresa</InputCadastro>

                            <Select
                                id="grupo_empresas"
                                onChange={handleImputGrupoEmpresas}
                                defaultValue={grupoEmpresa}>

                                <option key={0} value='0'>Seleciona o Grupo de empresa!</option>
                                {
                                    listGrupoEmpresas.map((grupo: IGrupoEmpresa) => {
                                        return <option key={grupo.id} 
                                        value={grupo.id}>{`${String(grupo.id)} - ${String(grupo.grupoEmpresa)} `}</option>
                                    })
                                }
                            </Select>

                            <DivButtonEnviar style={butonEnviar} >
                                <Button style={{ background: "green" }} type="submit" >Enviar</Button>
                            </DivButtonEnviar>
                            <DivButtonEditar style={butonEdit}>
                                <Button style={{ background: "yellow", color: '#000' }} type="button" onClick={() => { handlePut() }} >Editar</Button>
                                <Button type="button" style={{ background: "#e44c4e", color: '#bfbfbf' }} onClick={() => { handleCancelar() }}  >Cancelar</Button>
                            </DivButtonEditar>


                        </Form>

                    </Tabs>
                    <Tabs IdNameTab="tab2Empresas" text='Lista de Empresas'>
                    <CardListTab>
                            <ul>
                                {
                                    listEmpresas.map((item: IEmpresas) => {
                                        return <CardListEmpresas key={item.id}
                                            idDeleteEmpresas={handleDelete}
                                            idEditEmpresas={updateEmpresa}
                                            id={Number(item.id)}
                                            cogigoEmpresa={item.codigoEmpresa}
                                            nomeEmpresa={item.nomeEmpresa}
                                        />

                                    })
                                }
                            </ul>
                        </CardListTab>
                    
                    </Tabs>

                </Tab>

            </LayoutPrincipal>
        </Container>

    )
}
export default Empresas