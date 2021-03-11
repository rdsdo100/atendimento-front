import React from 'react';
import { Container, LI } from './styles'
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

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
      <LI key={id}>
        <div>
          <p>{id}</p>
          <p>{nomeUsuario}</p>
          <p>{matricula}</p>
<div>
<button type="button">Editar<MdModeEdit /></button>
          <button type="button">Deletar<MdDeleteForever /></button>
</div>

        </div>
      </LI>

    </Container>
  )

};

export default CardUsuario;