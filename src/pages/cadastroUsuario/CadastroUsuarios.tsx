import React, {ChangeEvent, FormEvent, useState} from "react";
import Menu from "../../componets/menu/Menu";
import './index.css'
const CadastroUsuario = ()=>{

    const [nomeUsuario , setNomeUsuario]= useState()
    const [senha , setSenha]= useState()
    const [emailUsuario , setEmailUsuario]= useState()
    const [matricula , setMatricula]= useState()
    const [tipo , setTipo] = useState()
    const [mesage , setMesage] = useState('okokokokoo')

    function btnCancelar (event: FormEvent){
        event.preventDefault()
limparCampos()
    }
    function confirmar(event : FormEvent<HTMLFormElement>){
        event.preventDefault()
limparCampos()

    }

    function limparCampos (){
        setNomeUsuario("")
        setSenha("")
        setEmailUsuario("")
        setMatricula("")
        setTipo('0')
    }

    return(
        <div>
            <Menu/>

<div className="cadastro">


            <form onSubmit={confirmar} className="cadastro" >
                <input className="cadastro" value={nomeUsuario} placeholder="Nome usuario" name="nomeUsuario" type="text"/>
                <input className="cadastro" value={senha} name="senha" placeholder="Senha"  type="text"/>
                <input className="cadastro" value={emailUsuario} name="email" type="text" placeholder="Email" />
                <input className="cadastro" value={matricula} name="matrcula" placeholder="Matricula"  type="text"/>
                <select value='0' className="cadastro" name="tipoUsuaruio">
                    <option value={tipo}> Seleciona tipo </option>
                    <option value='1'> Administrador</option>
                </select>
                <button className="cadastro" type="submit">Confirmar</button>
                <button className="cadastro"  onClick={btnCancelar} type="button">Cancelar</button>

            </form>


    <h1 className="cadastro" >{mesage}</h1>



            </div>

        </div>
    )
}
export default CadastroUsuario