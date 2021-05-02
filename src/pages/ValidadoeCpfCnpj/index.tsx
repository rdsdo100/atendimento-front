import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import Button from '../../component/buttons/Button';
import Input from '../../component/inputs/Input';
import TextArea from '../../component/inputs/TextArea';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { api } from '../../services/api';
import { Component} from './styles';

const ValidadoeCpfCnpj: React.FC = () => {

    const auth = localStorage.getItem('Authorization')
    const [cpgCnpj, setCpgCnpj] = useState<string>()
    const [resposta, setResposta] = useState<boolean>()

    function validar(event: ChangeEvent<HTMLInputElement>) {
        event.stopPropagation()
        const { value } = event.target
        setCpgCnpj(String(value))
    }

    async function handleSubmitEmpresa(event: FormEvent) {
        event.stopPropagation()
        if(cpgCnpj){
        api.get(`validar/%{cpgCnpj}`,
            { headers: { authorization: auth } })
            .then(response => {
                setResposta(Boolean(response))
                setCpgCnpj(`${cpgCnpj} - ${resposta}`)
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
                    <Input placeholder="cpf cnpj" onChange={validar}></Input>
                    <Button type ='submit'>Validar</Button>
                    <TextArea value={cpgCnpj} ></TextArea>
                </form>
            </LayoutPrincipal>
        </Component>
    )
}
export default ValidadoeCpfCnpj