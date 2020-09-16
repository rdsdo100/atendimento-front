import React, {useEffect, useState} from "react";
import {Container} from './styled'
import {api} from "../../../services/api";


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
            .then(atendimento=>{

                setAtendimentos(atendimento.data)

            })

    } , [])
    return(
        <Container>
            <ul>
                {
                    atendimentos?.map(atendimento => {
                        return(
                            <li key={atendimento.id}>
                            <div>
                                empresa: {` ${atendimento.id} - ${atendimento.descricaoAtendimento}`}
                            </div>
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