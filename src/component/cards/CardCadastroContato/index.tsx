import React, { useEffect, useState } from 'react';

import CardPopUp from '../CardPopUp';
import InputCadastro from '../../inputs/InputCadastro';
import Select from '../../inputs/Select';
import Button from '../../buttons/Button';
import { api } from '../../../services/api';
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

interface IProps{
  readonly buttonCancelar: (arg0: string) => void;
}

const CardCadastroContato: React.FC <IProps> = ({ children , buttonCancelar}) => {

  const auth = localStorage.getItem('Authorization')
  const [listEmpresas, setListEmpresas] = useState<IEmpresas[]>([])


  useEffect(() => {

    api.get<IEmpresas[]>('empresa',
        { headers: { authorization: auth } })
        .then(response => {
            const resposta: any = response.data
            setListEmpresas(resposta)

        }).catch(erro => {

          
        })

}, [])


function handleButtonCancelar(){

  const  none = "none"
 buttonCancelar(none)


}

  return (


    <DivFundo>


     <CardPopUp>
       <Select>
       <option key={0} value='0'>Seleciona a Empresa!</option>
                                {listEmpresas.map((empresa: any) => {
                                    return <option key={empresa.id} value={empresa.id}> {`${empresa.codigoEmpresa}- ${empresa.nomeEmpresa}`}</option>
                                })}
       </Select>
      <InputCadastro>Nome</InputCadastro>
      <InputCadastro>DD</InputCadastro>
      <InputCadastro>Telefone</InputCadastro>
      <Button>Cadastrar</Button>
      <Button onClick={()=>{handleButtonCancelar()}} >cancelar</Button>

     </CardPopUp>

     </DivFundo>
  )

};

export default CardCadastroContato;