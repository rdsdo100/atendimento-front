import React from 'react';

import CardPopUp from '../CardPopUp';
import InputCadastro from '../../inputs/InputCadastro';
import Select from '../../inputs/Select';
import Button from '../../buttons/Button';


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


const CardCadastroContato: React.FC = ({ children}) => {

  return (

     <CardPopUp>
       <Select>
         <option value="0">Empresa</option>
       </Select>
      <InputCadastro>Nome</InputCadastro>
      <InputCadastro>DD</InputCadastro>
      <InputCadastro>Telefone</InputCadastro>
      <Button>Cadastrar</Button>
      <Button>cancelar</Button>

     </CardPopUp>

    
  )

};

export default CardCadastroContato;