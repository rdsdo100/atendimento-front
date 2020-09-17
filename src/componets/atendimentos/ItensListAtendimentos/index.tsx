import React, {useEffect, useState} from "react";
import {Container , CartaoList , Header} from './styled'
import {api} from "../../../services/api";
import { FiEdit3 ,  } from "react-icons/fi";
import { DiMozilla } from "react-icons/di";
import { RiDeleteBinLine } from "react-icons/ri";


interface  IAtendiemtos {
    "id": number,
    "descricaoAtendimento": string,
    "pendente": boolean,
    "dataCadastro": Date,
    "usuariosIdFk": {
        "id": number,
        "nomeUsuario": string,
        "matriculaUsuario": string,
    }
    "empresasIdFk": {
        "id": number,
        "codEmpresa": string,
        "razaoEmpresa": string,
        "empresaIdFk": {
            "id": number,
            "nomeGrupo": string
        }
    }
}

const ItensListAtendimentos: React.FC = () => {

    const [atendimentos , setAtendimentos] = useState<IAtendiemtos[]>()

    useEffect(()=>{

        api.get<IAtendiemtos[]>('atendimentos/all')
            .then(atendimento =>{

                console.log(atendimento.data)
                setAtendimentos(atendimento.data)

            })

    } , [])
    return(
        <Container>
            <ul>
                {
                    atendimentos?.map(atendimento => {
                        const pendente = atendimento.pendente ? 'Sim' : 'Não'
                        return(
                            <li key={atendimento.id}>
                                <CartaoList>
                                    <Header>
                                        <label>empresa: {` ${atendimento.empresasIdFk.codEmpresa} - ${atendimento.empresasIdFk.razaoEmpresa}`}</label>

                                        <div>
                                            <FiEdit3/>
                                            <DiMozilla/>
                                            <RiDeleteBinLine/>
                                        </div>
                                    </Header>

                                    <label>Descroção: {atendimento.descricaoAtendimento}</label>
                                    <label>Data deCadastro: {atendimento.dataCadastro}</label>
                                    <label>Pendente: {pendente} - {String(atendimento.pendente)}</label>


                                </CartaoList>
                            </li>
                        )
                        }
                    )
                }
            </ul>
        </Container>
    )
}

export default ItensListAtendimentos