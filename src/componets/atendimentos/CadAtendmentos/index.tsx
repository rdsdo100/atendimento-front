import React, {FormEvent, useEffect, useState} from "react";
import {Container} from './styled'
import {api} from "../../../services/api";

interface IEmpresas  {
    id:number,
    codEmpresa: string,
    razaoEmpresa: string,
    fantasiaEmpresa?:string,
    idGrupoEmpresa: number,
    nomeGrupo: string
}

interface IGrupoEmpresas  {
    id:number,
    nomeGrupo: string
}

const CadAtendimentos = () => {

    const [empresas , setEmpresas] = useState<IEmpresas[]>()
    const [grupoEmpresas , setGrupoEmpresas] = useState<IGrupoEmpresas[]>()

    useEffect(() => {

        api.get<IEmpresas[]>('empresas')
            .then( (empresas) => {
                setEmpresas(empresas.data)
            })


} , [])

    useEffect(() => {

        api.get<IGrupoEmpresas[]>('empresas/grupo-empresas')
            .then( (grupoEmpresas) => {
                setGrupoEmpresas(grupoEmpresas.data)
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
                        grupoEmpresas?.map(grupoEmpresas =>{
                            return (
                                <option key={grupoEmpresas.id} value={grupoEmpresas.id} >{grupoEmpresas.nomeGrupo}</option>
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
