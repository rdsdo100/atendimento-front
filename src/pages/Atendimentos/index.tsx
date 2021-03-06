import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';

import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import Menu from '../../component/Menu';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import { Container, Form } from './styles'

interface IEmpresas {
    id: number
    codigoEmoresa: string
    nomeEmpresas: string
}
interface IEnvioAtendimentos {
    descricaoAtendimento : string
    codigoEmpresaId: number
}


const Atendimentos: React.FC = () => {

    const history = useHistory()
    const [listEmpresas, setListEmpresas] = useState<IEmpresas[]>([])
    const [empresa , setEmpresa] = useState<number>(0)
    const [atendimento , setAtendimento] = useState<string>('')
    const auth = useSelector((state: ApplicationState)=>state.auth.auth)

   useEffect(()=>{
        
        api.get<IEmpresas[]>('empresa' , 
       {headers: { authorization : auth}})
       .then(response =>{
        
               
                console.log(response.data)

                }).catch(erro =>{
                      
            history.push('/')
        })



    },[] )

    async function handleSubmit(event: FormEvent) {

        event.preventDefault()
           

    }

    function handleImputAtendimento(event : ChangeEvent<HTMLTextAreaElement>){
        const {name , value} = event.target
        setAtendimento(String(value))
    }

    function  handleSelectedIDEmpresa(event: ChangeEvent<HTMLSelectElement>) {
        const empresa = event.target.value

        
       // setEmpresa(Number(empresa))
    }


    return (

        <Container>
            <Menu></Menu>
            <Form onSubmit={handleSubmit}>
                <Select
                    name="empresas"
                    id="empresas"
                    onChange={handleSelectedIDEmpresa}
                >
                    <option > Seleciona uma UF</option>
                   
                </Select>
                <TextArea onChange={handleImputAtendimento}></TextArea>
                <button type="submit" >Enviar</button>
            </Form>
        </Container>

    )
}
export default Atendimentos