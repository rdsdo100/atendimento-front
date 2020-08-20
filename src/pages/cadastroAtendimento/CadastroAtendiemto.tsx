import React, {ChangeEvent, useEffect, useState} from "react";
import {api} from "../../services/api"
import Menu from "../../componets/menu/Menu";
import './index.css'


interface Empresas{
    codEmpresa?: string
    id?: number
    fantasiaEmpresa?: string
}

interface ListAtendimentos {
    id: number,
    dataCadastro: Date
    descricaoAtendimento: string
    pendente: boolean,

    empresasIdFk?: {
        codEmpresa?: string,
        fantasiaEmpresa?: string,
        id?: number,
        razaoEmpresa?: string,
    }
    usuariosIdFk?: {
        id?: number,
        nomeUsuario?: string
    }

}
const CadastroAtendimento = ()=>{

    const [empresas , setEmpresas] = useState<Empresas[]>()
    const [empresaId , setRmpresaId] = useState<number>()
    const [descricao , setDescricao] = useState<string>()
    const [pendente ,  setPendente] = useState()
    const [listAtendimentos , setListAtendimentos] = useState<ListAtendimentos[]>()

    useEffect(()=>{
        api.get<Empresas[]>('list-emprea')
            .then(empresas =>{

                setEmpresas(empresas.data)
            })

    } , [])

    useEffect(()=>{
        api.get<ListAtendimentos[]>('atendimentos' )
            .then(atendimentos =>{

                setListAtendimentos(atendimentos.data)
            })

    } , [])


    function handleSelectEmpresas(event: ChangeEvent<HTMLSelectElement>){
        const selectEmpresaId = Number(event.target.value)
        setRmpresaId(selectEmpresaId)
    }
    function handleCheckAtendimentos(event: ChangeEvent<HTMLInputElement>){


    }

    function handleTextAreaEmpresas(event: ChangeEvent<HTMLTextAreaElement>) {
        const empresaDescricao = String(event.target.value)
        setDescricao(empresaDescricao)
        console.log(empresaDescricao)
    }

        return(
        <div className="autoCadastroAtendimento">
            <Menu/>
            <form className="cadastroAtendimento">
                <select name="" id="" onChange={handleSelectEmpresas} >
                    <option value="0" >selecione empresa</option>
                    {empresas?.map(ok =>(
                        <option key={ok.id} value={ok.id}>{`${ok.codEmpresa} - ${ok.fantasiaEmpresa}`}</option>
                    ))}
                </select>
                <textarea onChange={handleTextAreaEmpresas}></textarea>
                <input type="checkbox" onChange={handleCheckAtendimentos} />
                <button>Cadastrar</button>

                {/*<ul>
                    {listAtendimentos?.map(listAtendiemtos=>{
                            return(
                                <li key={listAtendiemtos.id}>
                                    <h5>{listAtendiemtos.descricaoAtendimento} </h5>
                                </li>
                            )
                    }
                    )}
                </ul>*/}


            </form>
        </div>
        )
}
export default CadastroAtendimento