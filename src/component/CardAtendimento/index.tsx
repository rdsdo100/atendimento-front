import React from 'react';
import { Container, LI, Header } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";


interface IAtendimentosCards {
  id: number
  descricaoAtendimento?: string
  dataAtendimento?: Date
  cogigoEmpresa?: string
  nomeEmpresa: string
  readonly testId: (arg0: string) => void;

    
  
}

const CardAtendimento: React.FC<IAtendimentosCards> = ({
  id,
  descricaoAtendimento,
  cogigoEmpresa,
  nomeEmpresa,
  testId
  

}) => {

 
  const buttonId = () => {
    const novoLabel:string = "Rubens"
    testId(novoLabel);
}


  return (

    <Container>
      <LI>
        <div>
          <Header>{`${cogigoEmpresa}-${nomeEmpresa}`}</Header>
          <p>{` ${String(id)} - ${String(descricaoAtendimento)}`}</p>
        </div>
        <div>
          <button type="button">Editar<MdModeEdit /></button>
          <button type="button" onClick={buttonId}>Deletar<MdDeleteForever /></button>
        </div>
      </LI>

    </Container>
  )

};

export default CardAtendimento;