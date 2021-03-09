import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardAtendimento from '../../component/CardAtendimento';
import CardForms from '../../component/CardForms';
import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import Menu from '../../component/Menu';
import { api } from '../../services/api';

import { Container, Form, GridConteinerForm, GridConteinerHeader, GridConteinerList, GridTemplate } from './styles'

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
    const [atendimentosRecebidos , setAtendimentosRecebidos ] = useState<IAtendimentosRecebidos[]>([])
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

    }, [])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const respostaEnvio: IEnvioAtendimentos = {
            descricaoAtendimento: atendimento,
            codigoEmpresaId: empresa
        }

    }

    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target
        setAtendimento(String(value))
    }

    function handleSelectedIDEmpresa(event: ChangeEvent<HTMLSelectElement>) {
        const empresa = event.target.value
        setEmpresa(Number(empresa))
    }

    return (

        <Container>

            <GridTemplate>

                <GridConteinerHeader>
                    <Menu></Menu>
                </GridConteinerHeader>
                <GridConteinerForm>
                    <CardForms titulo={"Atendimentos"}>

                        <Form onSubmit={handleSubmit}>
                            <Select
                                name="empresas"
                                id="empresas"
                                onChange={handleSelectedIDEmpresa}

                            >

                                <option key={0} value='0'>Seleciona a Empresa!</option>
                                {listEmpresas.map((empresa: any) => {
                                    return <option key={empresa.id} value={empresa.id}> {`${empresa.codigoEmpresa}- ${empresa.nomeEmpresa}`}</option>
                                })}

                            </Select>
                            <TextArea onChange={handleImputAtendimento}></TextArea>
                            <button type="submit" >Enviar</button>
                        </Form>
                    </CardForms>
                </GridConteinerForm>
                <GridConteinerList>
                <CardForms titulo={"Lista de atendimentos do dia."}>

<ul>
{
    atendimentosRecebidos.map((atendimento:any)=>{

return <CardAtendimento 
id={atendimento.id}
 descricaoAtendimento={atendimento.descricaoAtendimento}
 cogigoEmpresa= {atendimento.cogigoEmpresa}
 nomeEmpresa= {atendimento.nomeEmpresa}
 />

    })
}
</ul>

</CardForms>
                </GridConteinerList>

            </GridTemplate>

        </Container>
    )
}
export default Atendimentos