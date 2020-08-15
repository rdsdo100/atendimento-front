import React from "react";
import Menu from "../../componets/menu/Menu";
import './index.css'
const CadastroAtendimento = ()=>{
    return(
        <div className="autoCadastroAtendimento">
            <Menu/>
            <form className="cadastroAtendimento">
                <select name="" id="">
                    <option value="0" >selecione empresa</option>
                </select>
                <textarea></textarea>
                <button>Cadastrar</button>


            </form>
        </div>
    )
}
export default CadastroAtendimento