import React from 'react';
import { Button, Container, ContainerButtons, LI, MdDeleteForeverIcon, MdModeEditIcon } from './styles'
import { ContainerInfo } from '../CardAtendimento/styles';


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
  readonly idContatoClick: (arg0: number) => void;
}


const CardContato: React.FC<IContatos> = ({ children,
  id,
  nome,
  telefones,
  idContatoClick

}) => {

  const buttonDeleteId = () => {

    const novoLabel: number = id
    idContatoClick(novoLabel);
  }


  return (

    <Container onClick={() => { buttonDeleteId() }}>
      <LI>
        <ContainerInfo>

          <p style={{ color: "#fff", margin: ' 10px 0' }}>{`${id}- ${nome}`}</p>

          <p style={{ color: "#fff" }} >{`${telefones[0].dd}- ${telefones[0].telefone} `}</p>

        </ContainerInfo>
        <ContainerButtons>
          <Button type="button" ><MdModeEditIcon /></Button>
          <Button type="button" ><MdDeleteForeverIcon /></Button>
        </ContainerButtons>


      </LI>

    </Container>
  )

};

export default CardContato;