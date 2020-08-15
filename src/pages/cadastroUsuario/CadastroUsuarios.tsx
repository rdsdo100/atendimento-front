import React, {ChangeEvent, FormEvent, useState} from "react";
import Menu from "../../componets/menu/Menu";
import {api} from "../../services/api"
import './index.css'

interface formData{
    nomeUsuario?: string,
    senha?:string,
    email?:string
    matrcula?:string
}

const CadastroUsuario = ()=>{

    const [tipoUsuaruio , setTipoUsuaruio] = useState()
    const [message , setMessage] = useState("")
    const [formData , setFormData] = useState<formData>({
    })

    function btnCancelar (event: FormEvent){
        event.preventDefault()

    }

    function handleNomeUsuario(event: ChangeEvent<HTMLInputElement>){

        const {name , value} = event.target
        setFormData({...formData , [name ]: value})

    }
    function confirmar(event : ChangeEvent<HTMLFormElement>){
        event.preventDefault()

        if(!(formData.email ,
            formData.email ,
            formData.matrcula ,
            formData.senha)){

            setMessage("Verifique os cadastros")
            return
        }

        api.post("usuarios" , {
            nomeUsuario : formData.nomeUsuario ,
            senha : formData.senha,
            email : formData.email,
            matrcula : formData.matrcula ,
            tipoUsuaruio : Number(tipoUsuaruio)
        }).then(usuarios =>{

            if(usuarios.data.message){
                setMessage(usuarios.data.message)
                console.log(message)
            }
            console.log(usuarios.data)
        }).catch(err =>{
            console.log(err)
        })

    }

    return(
        <div className="autoCadastroUsuario">
            <Menu/>

            <div className="cadastro">

                <form onSubmit={confirmar} className="cadastro" >
                    <input className="cadastro"  name="nomeUsuario" onChange={handleNomeUsuario} placeholder="Nome usuario"  type="text"/>
                    <input className="cadastro" onChange={handleNomeUsuario} name="senha" placeholder="Senha"  type="text"/>
                    <input className="cadastro" onChange={handleNomeUsuario} name="email" type="text" placeholder="Email" />
                    <input className="cadastro" onChange={handleNomeUsuario} name="matrcula" placeholder="Matricula"  type="text"/>
                    <select className="cadastro"  name="tipoUsuaruio">
                        <option  value="0"> Seleciona tipo </option>
                        <option  value="1"> Administrador</option>
                        <option  value="2"> Suporte</option>
                        <option  value="1"> Convidado</option>
                    </select>
                    <button className="cadastro" type="submit">Confirmar</button>
                    <button className="cadastro"  onClick={btnCancelar} type="button">Cancelar</button>

                </form>

                <label className="cadastroUsuario" >{message}</label>

            </div>

        </div>
    )
}
export default CadastroUsuario

/*

"nomeUsuario":"Dirgo",
    "senha": "123456",
    "email" :"rdsda2011@gmail.com",
    "matrcula" :"2",
    "tipoUsuaruio" : 1*/
