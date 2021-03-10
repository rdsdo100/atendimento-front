import React, { ButtonHTMLAttributes } from 'react';
import { Container, LI } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { DefaultSerializer } from 'node:v8';

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
      <LI key={id} >
        <div>
          <header>{`${cogigoEmpresa}-${nomeEmpresa}`}</header>
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