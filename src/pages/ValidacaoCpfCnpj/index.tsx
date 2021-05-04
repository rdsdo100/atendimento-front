import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import Button from '../../component/buttons/Button';
import Input from '../../component/inputs/Input';
import TextArea from '../../component/inputs/TextArea';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { api } from '../../services/api';
import { Component} from './styles';

const ValidacaoCpfCnpj: React.FC = () => {

    const auth = localStorage.getItem('Authorization')
    const [cpfCnpj, setCpfCnpj] = useState<string>('')
    const [resposta, setResposta] = useState<string>()

    function handleValidar( event: ChangeEvent<HTMLInputElement>) {
        const cpfCnpj = event.target.value
        setCpfCnpj(String(cpfCnpj))
    }

    async function handleSubmitEmpresa(event: FormEvent) {
        event.preventDefault()

        if(cpfCnpj){
        api.post(`validar`, {cpfCnpj: cpfCnpj} , 
            { headers: { authorization: auth } })
            .then(response => {

                setResposta(String(response.data.validacao))
               setCpfCnpj(`${cpfCnpj} - ${resposta}`)
            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')
                //  history.push('/')
            })
        }else{
            alert("Peencha o campo!")
        }
    }

    return (
        <Component>
            <LayoutPrincipal titulo='VAlidação Cpf Cnpj'>
                <form onSubmit={handleSubmitEmpresa}>
                  
                    <Input placeholder="Cpf Cnpj" onChange={handleValidar}></Input>
                    <Button type ='submit'>Validar</Button>
                    <TextArea value={resposta} ></TextArea>
                </form>
            </LayoutPrincipal>
        </Component>
    )
}
export default ValidacaoCpfCnpj