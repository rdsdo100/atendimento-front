import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
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
    const [atualizarId , setAtualizarId] = useState<number>()
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

    } , [atualizarId])


    function handleSelectEmpresas(event: ChangeEvent<HTMLSelectElement>){
        const selectEmpresaId = Number(event.target.value)
        setRmpresaId(selectEmpresaId)
    }
    function handleCheckAtendimentos(event: ChangeEvent<HTMLInputElement>){


    }

    function handlECadastroAtendimentos(event: FormEvent){
        event.preventDefault()

        api.post("atendimentos" , {

            "empresa": empresaId ,
            "descricaoAtendimento": descricao,
            "pendente": true

        }).then(atendimentos =>{
            console.log(atendimentos.data)
            setAtualizarId(Number(atendimentos.data.id))
        })

    }

    function handleTextAreaEmpresas(event: ChangeEvent<HTMLTextAreaElement>) {
        const empresaDescricao = String(event.target.value)
        setDescricao(empresaDescricao)
        console.log(empresaDescricao)
    }
    async  function deletaLiAtendimentos(deleteId: number){
        const deletado = await api.delete(`atendimentos/${deleteId}`  )

        console.log(deletado)
        const data = new Date()
        setAtualizarId(Number(deletado.data.deletado) + Number(data.getMilliseconds()))

    }

    return(
        <div className="atendimentosGrid">
            <Menu/>
            <form className="cadastroAtendimento">
                <select className="selectAtendimento" name="" id="" onChange={handleSelectEmpresas} >
                    <option value="0" >selecione empresa</option>
                    {empresas?.map(ok =>(
                        <option key={ok.id} value={ok.id}>{`${ok.codEmpresa} - ${ok.fantasiaEmpresa}`}</option>
                    ))}
                </select>
                <textarea className="textAreaAtendimentos" onChange={handleTextAreaEmpresas}></textarea>
                <input type="checkbox" onChange={handleCheckAtendimentos} />
                <button onClick={handlECadastroAtendimentos} >Cadastrar</button>
            </form>

            <div className="listAtendimentos">
                <ul className="listAtendimentos" >
                    {listAtendimentos?.map(listAtendiemtos=>{
                        const pendente = listAtendiemtos.pendente ? "Pendente" : "Concluida"


                        return(
                            <li  className="listAtendimentos" key={listAtendiemtos.id}>
                                <h1 id="Codigo" >{`Codigo Empresa: ${listAtendiemtos.empresasIdFk?.codEmpresa}`}</h1>
                                <h1>{`Descrição: ${listAtendiemtos.descricaoAtendimento}`} </h1>
                                <h1>{`Data Cadastro ${listAtendiemtos.dataCadastro}`}</h1>
                                <h1>{`Situação: ${pendente}`}</h1>
                                <button  onClick={()=>{ deletaLiAtendimentos(listAtendiemtos.id)}} >Deletar</button>
                            </li>
                        )
                    }
                    )}
                </ul>

            </div>
        </div>
    )
}
export default CadastroAtendimento