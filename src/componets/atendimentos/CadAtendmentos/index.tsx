import React, {FormEvent, useEffect, useState} from "react";
import {Container} from './styled'
import {api} from "../../../services/api";

interface IEmpresas  {
    id:string,
    codEmpresa: string,
    razaoEmpresa: string,
    fantasiaEmpresa?:string
}

const CadAtendimentos = () => {

    const [empresas , setEmpresas] = useState<IEmpresas[]>()

useEffect(() => {

    api.get<IEmpresas[]>('empresas')
        .then( (empresas) => {
            console.log(empresas.data)
            setEmpresas(empresas.data)
        })



} , [])

    function onCadastro (event : FormEvent<HTMLButtonElement>){
        event.preventDefault()
        console.log("Click")
    }

    return(
        <Container>

           <form>

               <select>
                   <option value='0' >Selediona Gruo de Empresas</option>
                   {
                       empresas?.map(empresas =>{
                           return (
                               <option key={empresas.id} value={empresas.id} >{` ${empresas.codEmpresa} - ${empresas.fantasiaEmpresa}`}</option>
                           )
                       })
                   }
               </select>
               <select>
                   <option value='0' >seleciona empresas</option>
                   {
                       empresas?.map(empresas =>{
                           return (
                               <option key={empresas.id} value={empresas.id} >{` ${empresas.codEmpresa} - ${empresas.fantasiaEmpresa}`}</option>
                           )
                       })
                   }
               </select>
               <textarea></textarea>

               <button type="button" onClick={onCadastro} >Cadastrar</button>
           </form>
        </Container>
    )

}

export default CadAtendimentos
