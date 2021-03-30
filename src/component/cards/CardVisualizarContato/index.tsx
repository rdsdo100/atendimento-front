import React from 'react';
import CardPopUp from '../CardPopUp';
import Button from '../../buttons/Button';
import { DivFundo, DivTableContato, Span } from './styles';


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

}


interface IProps {
  readonly clickVisualizarContato: (arg0: string) => void;
  contato: IContatos
}

const CardVisualizarContato: React.FC<IProps> = ({ children, clickVisualizarContato, contato }) => {

  function handleButtonCancelar() {

    const none = "none"
    clickVisualizarContato(none)
  }

  return (


    <DivFundo>
      <CardPopUp>

        <div>
          <div>
            <Span>Empresa: {contato.nomeEmpresa} </Span>
            <Span>Nome: {contato.nome}</Span>
            <Span>Função: </Span>
            <button>Novo número</button>
          </div>

          <DivTableContato>
            <table style={{ width: "100%" }}>
              <tr>
                <th>ID</th>
                <th>DD</th>
                <th>Telefone</th>
                <th>Info.</th>
                <th>Opçoes</th>
              </tr>
              <tr>
                <td >{contato.telefones[0].id}</td>
                <td>{contato.telefones[0].dd}</td>
                <td >{contato.telefones[0].telefone}</td>
                <td>Principal</td>
                <td >
                  <button>Editar</button>
                </td>
              </tr>


            </table>

          </DivTableContato>
        </div>

        <Button onClick={() => { handleButtonCancelar() }} >Fechar</Button>
      </CardPopUp>
    </DivFundo>
  )

};

export default CardVisualizarContato;