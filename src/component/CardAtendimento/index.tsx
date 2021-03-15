import React from 'react';
import { Container, LI, Header, ContainerButtons, ContainerInfo, MdDeleteForeverIcon, MdModeEditIcon, Button } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";


interface IAtendimentosCards {
  id: number
  descricaoAtendimento?: string
  dataAtendimento?: Date
  cogigoEmpresa?: string
  nomeEmpresa: string
  readonly idDeleteAtendimentos: (arg0: number) => void;
  readonly idEditAtendimentos: (arg0: number) => void;

    
  
}

const CardAtendimento: React.FC<IAtendimentosCards> = ({
  id,
  descricaoAtendimento,
  cogigoEmpresa,
  nomeEmpresa,
  idDeleteAtendimentos,
  idEditAtendimentos
  

}) => {

 
  const buttonDeleteId = () => {

    const novoLabel:number = id
    idDeleteAtendimentos(novoLabel);
}
const buttonEditdId = () => {
  
  const novoLabel:number = id
  idEditAtendimentos(novoLabel);
}



  return (

    <Container>
      <LI>

        <ContainerInfo>
          <Header>{`${cogigoEmpresa}-${nomeEmpresa}`}</Header>
          <p>{` ${String(id)} - ${String(descricaoAtendimento)}`}</p>
        </ContainerInfo>
        <ContainerButtons>
          <Button type="button" onClick={buttonEditdId}><MdModeEditIcon/></Button>
          <Button type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></Button>
        </ContainerButtons>
      </LI>

    </Container>
  )

};

export default CardAtendimento;