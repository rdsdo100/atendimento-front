import React from 'react';
import CardPopUp from '../CardPopUp';
import Button from '../../buttons/Button';
import { DivFundo } from './styles';


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
  telefones: Itelefone

}
interface IEmpresas {
  id: number
  codigoEmoresa: string
  nomeEmpresas: any
}

interface IProps {
  readonly clickVisualizarContato: (arg0: string) => void;
}

const CardVisualizarContato: React.FC<IProps> = ({ children, clickVisualizarContato }) => {

  function handleButtonCancelar() {

    const none = "none"
    clickVisualizarContato(none)
  }

  return (


    <DivFundo>
      <CardPopUp>

        <div>
          <p>Empresa:</p>
          <p>Nome: </p>
          <p>Função: </p>
          <button>Novo numero</button>

          <div style={{ width: "100%", background: '#999', margin: "40px 0", padding: "40px 0" }}>
            <table style={{ width: "100%" }}>
              <tr>
                <th>ID</th>
                <th>DD</th>
                <th>Telefone</th>
                <th>Info.</th>
                <th>Opçoes</th>
              </tr>
              <tr>
                <td >1</td>
                <td>62</td>
                <td >991544066</td>
                <td>Principal</td>
                <td >
                  <button>Editar</button>
                </td>
              </tr>


            </table>

          </div>
        </div>

        <Button onClick={() => { handleButtonCancelar() }} >Fechar</Button>
      </CardPopUp>
    </DivFundo>
  )

};

export default CardVisualizarContato;