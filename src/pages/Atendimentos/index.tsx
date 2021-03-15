import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MdTextFields } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import CardAtendimento from '../../component/CardAtendimento';
import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';

import { Container, Form } from './styles'

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
    cogigoEmpresa: string
    nomeEmpresa: string
}

interface IButton{
    background: string,
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
    const [butonEnviar , setButtonEnviar] = useState<IButton>({background: 'green' , display: 'block'})
    const [butonEdit , setButtonEdit] = useState<IButton>({background: 'red' , display: 'none'})
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


    const handlePut = (idDelete: number) => {

        api.put(`atendimento`,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setMessage(String(resposta))
                setIdDelete(idDelete)

            }).catch(erro => {

                alert('Não enviado!')

            })

    }


    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const {  value } = event.target
        setAtendimento(String(value))
    }

    function handleSelectedIDEmpresa(event: ChangeEvent<HTMLSelectElement>) {
        const empresa = event.target.value
        setEmpresa(Number(empresa))
    }

   

    function updateAtendimento() {

        const ativarButton: IButton = {background: 'yellow' }
        const desativarButton: IButton = {background: 'blue' , display: 'none'}
        setButtonEdit(ativarButton)
        setButtonEnviar(desativarButton)

        if (document.getElementById("textAreaAtendimento")) {
            (document.getElementById("textAreaAtendimento") as HTMLInputElement)
                .value = "ok";

        }

        if (document.getElementById("empresasSelectAtendimentos")) {
            (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement)
                .value = "15";

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



                            <button type="submit" style={butonEnviar} >Enviar</button>
                            <button type="submit" style={butonEdit} >Editar</button>

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