import React from 'react';
import { Container, LI, Header, ContainerButtons, ContainerInfo, MdDeleteForeverIcon, MdModeEditIcon, Button } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";


interface IAtendimentosCards {
  id: number
  descricaoAtendimento?: string
  dataAtendimento?: Date
  cogigoEmpresa?: string
  nomeEmpresa: string
  readonly testId: (arg0: number) => void;

    
  
}

const CardAtendimento: React.FC<IAtendimentosCards> = ({
  id,
  descricaoAtendimento,
  cogigoEmpresa,
  nomeEmpresa,
  testId
  

}) => {

 
  const buttonId = () => {
    const novoLabel:number = id
    testId(novoLabel);
}


  return (

    <Container>
      <LI>

        <ContainerInfo>
          <Header>{`${cogigoEmpresa}-${nomeEmpresa}`}</Header>
          <p>{` ${String(id)} - ${String(descricaoAtendimento)}`}</p>
        </ContainerInfo>
        <ContainerButtons>
          <Button type="button"><MdModeEditIcon/></Button>
          <Button type="button" onClick={buttonId} ><MdDeleteForeverIcon /></Button>
        </ContainerButtons>
      </LI>

    </Container>
  )

};

export default CardAtendimento;