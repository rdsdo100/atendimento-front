import React from "react";
import Menu from "../../componets/menu/Menu";
import "./index.css"

const CadastroEmpresa = () =>{
    return(
        <div className="autoCadastroEmpresa">
            <Menu/>

            <form className="cadastroEmpresa" >
                <input name="codEmpresa" placeholder="Código da Empresa" type="text"/>
                <input name="razaoEmpresa" placeholder="Razão" type="text"/>
                <input name="fantasiaEmpresa"  placeholder="Fantasia" type="text"/>

                <button>Cadastrar</button>
            </form>

        </div>
    )
}

export default CadastroEmpresa