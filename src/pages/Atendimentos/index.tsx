import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardAtendimento from '../../component/CardAtendimento';
import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';

import { Container, Form} from './styles'

interface IEmpresas {
    id: number
    codigoEmoresa: string
    nomeEmpresas: any
}
interface IEnvioAtendimentos {
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

const Atendimentos: React.FC = () => {

    const history = useHistory()
    const [listEmpresas, setListEmpresas] = useState<IEmpresas[]>([])
    const [empresa, setEmpresa] = useState<number>(0)
    const [atendimento, setAtendimento] = useState<string>('')
    const [atendimentosRecebidos, setAtendimentosRecebidos] = useState<IAtendimentosRecebidos[]>([])
    const [idDelete, setIdDelete] = useState<number>()
    const [message , setMessage] = useState<string>('')
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
                console.log(resposta)
                setAtendimento('')
                setEmpresa(0)
            }).catch(erro => {

                alert('Não enviado!')

            })
    }

    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target
        setAtendimento(String(value))
    }

    function handleSelectedIDEmpresa(event: ChangeEvent<HTMLSelectElement>) {
        const empresa = event.target.value
        setEmpresa(Number(empresa))
    }

    const handleDelete = (idDelete: number) => {
        setIdDelete(idDelete)

        api.delete<string>(`atendimento/${idDelete}`, 
        { headers: { authorization: auth } })
        .then(response => {
            const resposta: any = response.data
            
            console.log(resposta)
            //setMessage(String(resposta))
            
        }).catch(erro => {

            alert('Não enviado!')

        })
        
    }

    return (

        <Container>

            <LayoutPrincipal titulo="Atendimentos" >

                <Tab>
                    <Tabs IdNameTab="tab1Atendimento" defaultCheckedTab={true} text='Cadastrar tendimento'>
                        <Form onSubmit={handleSubmit}>

                            <Select
                                name="empresas"
                                id="empresas"
                                onChange={handleSelectedIDEmpresa}>

                                <option key={0} value='0'>Seleciona a Empresa!</option>
                                {listEmpresas.map((empresa: any) => {
                                    return <option key={empresa.id} value={empresa.id}> {`${empresa.codigoEmpresa}- ${empresa.nomeEmpresa}`}</option>
                                })}

                            </Select>

                            <TextArea
                                onChange={handleImputAtendimento}>
                            </TextArea>

                            <button type="submit" >Enviar</button>

                        </Form>
                    </Tabs>
                    <Tabs IdNameTab="tab2Atendimento" text='Lista de Atendimentos'>
                        <CardListTab>
                            <ul>
                                {
                                    atendimentosRecebidos.map((atendimento: any) => {

                                        return <CardAtendimento key={atendimento.id}
                                            testId={handleDelete}
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