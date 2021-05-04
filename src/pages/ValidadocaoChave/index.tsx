import React, { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import Button from '../../component/buttons/Button';
import Input from '../../component/inputs/Input';
import InputCadastro from '../../component/inputs/InputCadastro';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { api } from '../../services/api';
import { Component, Div20, Div30, Div50, DivLinha } from './styles';

const ValidacaoChave: React.FC = () => {

    const auth = localStorage.getItem('Authorization')
    const [chave, setChave] = useState<string>('')
    const [resposta, setResposta] = useState<string>()

    function handleValidar(event: ChangeEvent<HTMLInputElement>) {
        const cpfCnpj = event.target.value
        setChave(String(cpfCnpj))
    }

    async function handleSubmitEmpresa(event: FormEvent) {
        event.preventDefault()

        if (chave) {
            api.post(`validar-chave`, {},
                { headers: { authorization: auth } })
                .then(response => {

                    setResposta(String(response.data.validacao))
                    setChave(`${chave} - ${resposta}`)
                })
                .catch(erro => {
                    alert('Erro ao acessar servidor!')
                    //  history.push('/')
                })
        } else {
            alert("Peencha o campo!")
        }
    }

    return (
        <Component>
            <LayoutPrincipal titulo='VAlidação Chave'>
                <form onSubmit={handleSubmitEmpresa}>

                    <Input placeholder="Chave" onChange={handleValidar}></Input>
                    <Input placeholder="Chave" onChange={handleValidar}></Input>
                    <Button type='submit'>Validar</Button>
                    <Component>
                        <DivLinha>
                            <Div20>
                                <Input placeholder =""></Input>
                            </Div20>
                            <Div30>
                                <Input placeholder ="Ano e mês da emissão da NF-e " ></Input>
                                </Div30>
                               <Div50>
                                <Input placeholder="Código da NF-e " ></Input>
                                </Div50>

                        </DivLinha>
                        
                        <DivLinha>
                            <Div20>
                        <Input placeholder="Modelo da NF-e "  ></Input>
                        </Div20>
                            <Input placeholder="CNPJ do Emitente " ></Input>
                            </DivLinha> 
                        
                        <DivLinha>
                            <Input placeholder="Série da NF-e " ></Input>
                            <Input placeholder="Número da NF-e " ></Input>
                            </DivLinha>
                            <DivLinha>
                            <Input placeholder="Forma de Emissão NF-e " ></Input>
                          
                            <Input placeholder="DV (digito verificador) " ></Input>
                            </DivLinha>
                    </Component>







                </form>
            </LayoutPrincipal>
        </Component>
    )
}
export default ValidacaoChave