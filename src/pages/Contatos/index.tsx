import React, { useState } from 'react';
import Button from '../../component/buttons/Button';
import CardCadastroContato from '../../component/cards/CardCadastroContato';
import CardContato from '../../component/cards/CardContato';
import CardListContatos from '../../component/cards/CardListContatos';

import Input from '../../component/inputs/Input';

import Select from '../../component/inputs/Select';
import LayoutPrincipal from '../../component/LayoutPrincipal';

import { Component, DimensaoButonPesquisar, DimensaoButonNovo, DimensaoInput, DimensaoSelect, PesquisaBox } from './styles';


interface Itelefone {
    id: number
    dd: string
    telefone: string
}

interface IContatos {
    id: number
    idEmpresa?: number
    nomeEmpresa?: string
    nome: string
    telefones: Itelefone[]
}

const Contatos: React.FC = () => {

    const data: IContatos[] = [

        { id: 1, nome: "Rubens", telefones: [{ id: 1, dd: "62", telefone: "991544066" }] },
        { id: 2, nome: "Diego", telefones: [{ id: 2, dd: "64", telefone: "35135599" }] },
        { id: 3, nome: "Afonso", telefones: [{ id: 3, dd: "62", telefone: "984251030" }] },
        { id: 4, nome: "seiko", telefones: [{ id: 4, dd: "62", telefone: "984251030" }] },

    ]

    const [listContatos, setListContatos] = useState<IContatos[]>(data)


    function handrleClickCardContato(id: number){
        alert(id)
    }


    return (

        <Component>
            <LayoutPrincipal titulo='Contatos'>

             
                
          
            <CardCadastroContato></CardCadastroContato>





                

                <PesquisaBox>

                    <DimensaoButonNovo>
                    <Button>Novo</Button>
                    </DimensaoButonNovo>

                    <DimensaoSelect>
                        <Select>
                            <option value="0">Pesquisa</option>
                            <option value="1">Empresa</option>
                            <option value="2">Nome Usuario</option>
                            <option value="3">Telefone</option>
                        </Select>
                    </DimensaoSelect>
                    <DimensaoInput>
                        <Input></Input>
                    </DimensaoInput>
                    <DimensaoButonPesquisar> <Button>Pesqisar</Button></DimensaoButonPesquisar>
                </PesquisaBox>
                <CardListContatos>

                

                    {
                        listContatos.map((contato: IContatos) => {

                            return <CardContato key={contato.id}
                            idContatoClick={handrleClickCardContato}
                                id={contato.id}
                                nome={contato.nome}
                                telefones={contato.telefones}




                            ></CardContato>

                        })

                    }

                </CardListContatos>

            </LayoutPrincipal>
        </Component>



    )
}
export default Contatos