import React from 'react';
import { Button, Container, ContainerButtons, LI,  MdModeEditIcon } from './styles'

import { ContainerInfo } from '../CardAtendimento/styles';

interface IUduario {

  id: number
  nomeUsuario?: string,
  email?: string,
  matricula?: string,
  ativo?: boolean,
  bloqueado?: boolean,
  grupoUsuariosId?: number
  grupoUsuariosNome?: string
 // readonly idDeleteUsuario?: (arg0: number) => void;
  readonly idEditUsuario: (arg0: number) => void;

}




const CardUsuario: React.FC<IUduario> = ({ id, nomeUsuario, matricula,  idEditUsuario }) => {


  /*const buttonDeleteId = () => {

    const novoLabel: number = id
    idDeleteUsuario(novoLabel);
  }*/
  const buttonEditdId = () => {

    const novoLabel: number = id
    idEditUsuario(novoLabel);
  }

  return (

    <Container>
      <LI>
        <ContainerInfo>
          <p>{id}</p>
          <p>{nomeUsuario}</p>
          <p>{matricula}</p>

        </ContainerInfo>
        <ContainerButtons>
          <Button type="button" onClick={buttonEditdId}><MdModeEditIcon /></Button>
       {/*   <Button type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></Button>*/}
        </ContainerButtons>


      </LI>

    </Container>
  )

};

export default CardUsuario;