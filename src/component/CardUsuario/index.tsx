import React from 'react';
import { Button, Container, ContainerButtons, LI, MdDeleteForeverIcon, MdModeEditIcon } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
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

}




const CardUsuario: React.FC<IUduario> = ({ id, nomeUsuario, matricula }) => {

  return (

    <Container>
      <LI>
        <ContainerInfo>
          <p>{id}</p>
          <p>{nomeUsuario}</p>
          <p>{matricula}</p>

          </ContainerInfo>
<ContainerButtons>
<Button type="button"><MdModeEditIcon /></Button>
          <Button type="button"><MdDeleteForeverIcon /></Button>
</ContainerButtons>

        
      </LI>

    </Container>
  )

};

export default CardUsuario;