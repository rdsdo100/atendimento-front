import React, { useState } from 'react';
import Button from '../../component/buttons/Button';
import CardCadastroContato from '../../component/cards/CardCadastroContato';
import CardContato from '../../component/cards/CardContato';
import CardListContatos from '../../component/cards/CardListContatos';
import CardVisualizarContato from '../../component/cards/CardVisualizarContato';

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


const Contatos: React.FC  = () => {

    const data: IContatos[] = [

        { id: 1, nome: "Rubens", telefones: [{ id: 1, dd: "62", telefone: "991544066" }] },
        { id: 2, nome: "Diego", telefones: [{ id: 2, dd: "64", telefone: "35135599" }] },
        { id: 3, nome: "Afonso", telefones: [{ id: 3, dd: "62", telefone: "984251030" }] },
        { id: 4, nome: "seiko", telefones: [{ id: 4, dd: "62", telefone: "984251030" }] },
        { id: 5, nome: "Rubens", telefones: [{ id: 1, dd: "62", telefone: "991544066" }] },
        { id: 6, nome: "Diego", telefones: [{ id: 2, dd: "64", telefone: "35135599" }] },
        { id: 4, nome: "Afonso", telefones: [{ id: 3, dd: "62", telefone: "984251030" }] },
        { id: 8, nome: "seiko", telefones: [{ id: 4, dd: "62", telefone: "984251030" }] },

    ]

    const [listContatos, setListContatos] = useState<IContatos[]>(data)
    const [stylesDisplayNovo , setStylesDisplayNovo] = useState<string>("none")
    const [stylesDisplayVisualizar , setStylesDisplayVisualizar] = useState<string>("none")

    function handleClickCardContato(id: number){
        setStylesDisplayVisualizar("")
       
    }
    function handleButtonNovo(){
        setStylesDisplayNovo("") 
    }

    function handleButtonCancelar(none: string){
        setStylesDisplayNovo(none)
        setStylesDisplayVisualizar(none)
    }

    return (

        <Component>
            <LayoutPrincipal titulo='Contatos'>
           <div style={{display: stylesDisplayNovo}}>
            <CardCadastroContato  buttonCancelar={handleButtonCancelar} ></CardCadastroContato>
            </div>

            <div style={{display: stylesDisplayVisualizar}}>
            <CardVisualizarContato  clickVisualizarContato={handleButtonCancelar} ></CardVisualizarContato>
            </div>

                <PesquisaBox>

                    <DimensaoButonNovo>
                    <Button onClick={()=>{handleButtonNovo()}}>Novo</Button>
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
                            idContatoClick={handleClickCardContato}
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