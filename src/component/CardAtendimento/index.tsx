import React from 'react';
import { Container, LI   }  from './styles'

interface IAtendimentosCards {
  id: number
  descricaoAtendimento?: string
  dataAtendimento?: Date
  cogigoEmpresa?: string
  nomeEmpresa?: string
}

const CardAtendimento: React.FC<IAtendimentosCards> = ({
  id,
  descricaoAtendimento,
  cogigoEmpresa,
  nomeEmpresa
 
    }) => {
  return(

      <Container>
       <LI key={id} >
         <header>{`${cogigoEmpresa}-${nomeEmpresa}`}</header>
         {` ${String(id)} - ${String(descricaoAtendimento)}`}
       </LI>

      </Container>
  )

};

export default CardAtendimento;