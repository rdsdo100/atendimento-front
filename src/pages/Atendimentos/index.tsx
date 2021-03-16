import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../component/buttons/Button';
import ButtonAtendimentos from '../../component/buttons/ButtonAtendimentos';
import CardAtendimento from '../../component/CardAtendimento';
import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';

import { Container, Form, DivButtonEditar, DivuttonEnviar } from './styles'

interface IEmpresas {
    id: number
    codigoEmoresa: string
    nomeEmpresas: any
}
interface IEnvioAtendimentos {
    id?: number
    descricaoAtendimento: string
    codigoEmpresaId: number
}
interface IAtendimentosRecebidos {
    id: number
    descricaoAtendimento: string
    dataAtendimento: Date
    idEmpresa: number
    cogigoEmpresa: string
    nomeEmpresa: string
}

interface IButton {
    display?: string
}



const Atendimentos: React.FC = () => {

    const history = useHistory()
    const [listEmpresas, setListEmpresas] = useState<IEmpresas[]>([])
    const [empresa, setEmpresa] = useState<number>(0)
    const [atendimento, setAtendimento] = useState<string>('')
    const [atendimentosRecebidos, setAtendimentosRecebidos] = useState<IAtendimentosRecebidos[]>([])
    const [idDelete, setIdDelete] = useState<number>()
    const [message, setMessage] = useState<string>('')
    const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'block' })
    const [butonEdit, setButtonEdit] = useState<IButton>({ display: 'none' })
    const auth = localStorage.getItem('Authorization')



    useEffect(() => {

        api.get<IEmpresas[]>('empresa',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListEmpresas(resposta)

            }).catch(erro => {

                history.push('/')
            })

    }, [])

    useEffect(() => {

        api.get<IAtendimentosRecebidos[]>('atendimento',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setAtendimentosRecebidos(resposta)

            }).catch(erro => {

                history.push('/')
            })

    }, [idDelete])

    async function handleSubmit(event: FormEvent) {

        const respostaEnvio: IEnvioAtendimentos = {
            descricaoAtendimento: atendimento,
            codigoEmpresaId: empresa
        }
        api.post<IEnvioAtendimentos>('atendimento', respostaEnvio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                alert('Salvo!')
                setAtendimento('')
                setEmpresa(0)
            }).catch(erro => {

                alert('Não enviado!')

            })
    }

    const handleDelete = (idDelete: number) => {

        api.delete<string>(`atendimento/${idDelete}`,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setMessage(String(resposta))
                setIdDelete(idDelete)

            }).catch(erro => {

                alert('Não enviado!')

            })

    }


    function updateAtendimento(idEdit: number) {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(ativarButton)
        setButtonEnviar(desativarButton)

        const atendimentoEdit = atendimentosRecebidos.find(item => item.id === idEdit)

        if (document.getElementById("textAreaAtendimento")) {
            (document.getElementById("textAreaAtendimento") as HTMLInputElement)
                .value = String(atendimentoEdit?.descricaoAtendimento);
        }

        if (document.getElementById("empresasSelectAtendimentos")) {
            (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement)
                .value = String(atendimentoEdit?.idEmpresa);

        }
        if (document.getElementById("tab1Atendimento")) {
            (document.getElementById("tab1Atendimento") as HTMLInputElement)
                .checked = true;

        }
        if (document.getElementById("tab2Atendimento")) {
            (document.getElementById("tab2Atendimento") as HTMLInputElement)
                .checked = false;

        }

    }

    const handlePut = () => {



        if (document.getElementById("textAreaAtendimento")) {
          const tt =  (document.getElementById("textAreaAtendimento") as HTMLInputElement).value;
          console.log(tt )
        }

        if (document.getElementById("empresasSelectAtendimentos")) {
            const ts = (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement).value;
            console.log(ts)
        }

        

{/* 
        api.put(`atendimento`,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setMessage(String(resposta))
                setIdDelete(idDelete)

            }).catch(erro => {

                alert('Não enviado!')

            })
*/}

    }

    function handleCancelar(){

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(desativarButton)
        setButtonEnviar(ativarButton)

    }


    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const { value } = event.target
        setAtendimento(String(value))
    }

    function handleSelectedIDEmpresa(event: ChangeEvent<HTMLSelectElement>) {
        const empresa = event.target.value
        setEmpresa(Number(empresa))
    }

    return (

        <Container>

            <LayoutPrincipal titulo="Atendimentos" >

                <Tab>
                    <Tabs IdNameTab="tab1Atendimento" defaultCheckedTab={true} text='Cadastrar tendimento'>
                        <Form onSubmit={handleSubmit}>

                            <Select
                                id="empresasSelectAtendimentos"

                                onChange={handleSelectedIDEmpresa}>

                                <option key={0} value='0'>Seleciona a Empresa!</option>
                                {listEmpresas.map((empresa: any) => {
                                    return <option key={empresa.id} value={empresa.id}> {`${empresa.codigoEmpresa}- ${empresa.nomeEmpresa}`}</option>
                                })}

                            </Select>

                            <TextArea
                                id="textAreaAtendimento"
                                onChange={handleImputAtendimento}>
                            </TextArea>


                            <DivuttonEnviar style={butonEnviar} >
                                <Button style={{background: "green"}}  type="submit"  >Enviar</Button>
                            </DivuttonEnviar>
                            <DivButtonEditar style={butonEdit}>
                                <Button  style={{background: "yellow" , color: '#000'}} type="submit" onClick={()=>{handlePut()}} >Editar</Button>
                                <Button type="submit" onClick={()=>{handleCancelar()}}  >Cancelar</Button>
                            </DivButtonEditar>
                        </Form>
                    </Tabs>
                    <Tabs IdNameTab="tab2Atendimento" text='Lista de Atendimentos'>
                        <CardListTab>
                            <ul>
                                {
                                    atendimentosRecebidos.map((atendimento: any) => {
                                        return <CardAtendimento key={atendimento.id}
                                            idDeleteAtendimentos={handleDelete}
                                            idEditAtendimentos={updateAtendimento}
                                            id={atendimento.id}
                                            descricaoAtendimento={atendimento.descricaoAtendimento}
                                            cogigoEmpresa={atendimento.cogigoEmpresa}
                                            nomeEmpresa={atendimento.nomeEmpresa}
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
export default Atendimentos