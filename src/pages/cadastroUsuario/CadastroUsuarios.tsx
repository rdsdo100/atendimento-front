import React, {ChangeEvent, FormEvent, useState} from "react";
import Menu from "../../componets/menu/Menu";
import {api} from "../../services/api"
import './index.css'
const CadastroUsuario = ()=>{

    const [nomeUsuario , setNomeUsuario]= useState()
    const [senha , setSenha]= useState()
    const [emailUsuario , setEmailUsuario]= useState()
    const [matrcula , setMatricula]= useState()
    const [tipoUsuaruio , setTipoUsuaruio] = useState()
    const [mesage , setMesage] = useState('okokokokoo')

    function btnCancelar (event: FormEvent){
        event.preventDefault()

    }
    function confirmar(event : ChangeEvent<HTMLFormElement>){
        event.preventDefault()

      setNomeUsuario(event.target.nomeUsuario.value)
        setEmailUsuario(event.target.email.value)
        setSenha(event.target.senha.value)
        setTipoUsuaruio(event.target.tipoUsuaruio.value)




        api.post("usuarios" , {
            nomeUsuario ,
            senha,
            email : emailUsuario,
            matrcula ,
            tipoUsuaruio
        }).then(usuarios =>{

            if(usuarios.data.message){
                setMesage(usuarios.data.message)
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
                <input className="cadastro"  name="nomeUsuario" placeholder="Nome usuario"  type="text"/>
                <input className="cadastro"  name="senha" placeholder="Senha"  type="text"/>
                <input className="cadastro"  name="email" type="text" placeholder="Email" />
                <input className="cadastro"  name="matrcula" placeholder="Matricula"  type="text"/>
                <select className="cadastro" name="tipoUsuaruio">
                    <option  value="0"> Seleciona tipo </option>
                    <option  value="1"> Administrador</option>
                </select>
                <button className="cadastro" type="submit">Confirmar</button>
                <button className="cadastro"  onClick={btnCancelar} type="button">Cancelar</button>

            </form>


    <label className="cadastroUsuario" >{mesage}</label>



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
