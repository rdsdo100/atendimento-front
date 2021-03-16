import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../component/buttons/Button';
import ButtonAtendimentos from '../../component/buttons/ButtonAtendimentos';
import CardAtendimento from '../../component/CardAtendimento';
import InputCadastro from '../../component/inputs/InputCadastro';
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
    const [idCadastro, setIdCadastro] = useState<number>()
    const [idEdit, setIidEdit] = useState<number>()
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

    }, [idDelete, idCadastro, idEdit])

    async function handleSubmit(event: FormEvent) {

        event.preventDefault()
        const respostaEnvio: IEnvioAtendimentos = {
            descricaoAtendimento: atendimento,
            codigoEmpresaId: empresa
        }
        api.post<IEnvioAtendimentos>('atendimento', respostaEnvio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setIdCadastro(Number(resposta.id))
                alert('Salvo!')


                if (document.getElementById("textAreaAtendimento")) {
                    (document.getElementById("textAreaAtendimento") as HTMLInputElement)
                        .value = "";
                }

                if (document.getElementById("empresasSelectAtendimentos")) {
                    (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement)
                        .value = "0";

                }
                if (document.getElementById("IdAtendimento")) {
                    (document.getElementById("IdAtendimento") as HTMLInputElement)
                        .value = "0";
                    }
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
        if (document.getElementById("IdAtendimento")) {
            (document.getElementById("IdAtendimento") as HTMLInputElement)
                .value = String(atendimentoEdit?.id);

        }
        if (document.getElementById("tab1Atendimento")) {
            (document.getElementById("tab1Atendimento") as HTMLInputElement)
                .checked = true;

        }
        if (document.getElementById("tab2Atendimento")) {
            (document.getElementById("tab2Atendimento") as HTMLInputElement)
                .checked = false;

        }  //IdAtendimento

    }

    const handlePut = () => {

        let putAtendimento: IEnvioAtendimentos

        if ((document.getElementById("textAreaAtendimento"))
            && (document.getElementById("empresasSelectAtendimentos"))
            && (document.getElementById("IdAtendimento"))){
            putAtendimento = {
                descricaoAtendimento: String((document.getElementById("textAreaAtendimento") as HTMLInputElement).value),
                codigoEmpresaId: Number((document.getElementById("empresasSelectAtendimentos") as HTMLInputElement).value),
                id: Number((document.getElementById("IdAtendimento") as HTMLInputElement).value),
            }
            console.log(putAtendimento)

        api.put(`atendimento`, putAtendimento,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setMessage(String(resposta))
                setIdDelete(idDelete)
                 setIidEdit(putAtendimento.id)

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

        if (document.getElementById("textAreaAtendimento")) {
            (document.getElementById("textAreaAtendimento") as HTMLInputElement)
                .value = "";
        }

        if (document.getElementById("empresasSelectAtendimentos")) {
            (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement)
                .value = "0";

        }

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


                            <div style={butonEdit}>
                                <InputCadastro id="IdAtendimento" defaultValue="0"  >Id</InputCadastro>
                            </div>
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
                                <Button style={{ background: "green" }} type="submit"  >Enviar</Button>
                            </DivuttonEnviar>
                            <DivButtonEditar style={butonEdit}>
                                <Button style={{ background: "yellow", color: '#000' }} type="button" onClick={() => { handlePut() }} >Editar</Button>
                                <Button type="button" onClick={() => { handleCancelar() }}  >Cancelar</Button>
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