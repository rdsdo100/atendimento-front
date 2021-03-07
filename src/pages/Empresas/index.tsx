import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Select from '../../component/inputs/Select';
import TextArea from '../../component/inputs/TextArea';
import Menu from '../../component/Menu';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import { Container, Form } from './styles'



const Empresas: React.FC = () => {

    const history = useHistory()
    
    const auth = useSelector((state: ApplicationState) => state.auth.auth)

    /*useEffect(() => {

        api.get('empresa',
            { headers: { authorization: auth } })
            .then(response => {
                
            }).catch(erro => {

               
            })



    }, [])*/




    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

alert("Ta indo!!!!")


    }

    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target

        
    }
    
    return (

        <Container>
            <Menu></Menu>
            <Form onSubmit={handleSubmit} >
                
                <button type="submit" >Enviar</button>
            </Form>
        </Container>

    )
} 
export default Empresas