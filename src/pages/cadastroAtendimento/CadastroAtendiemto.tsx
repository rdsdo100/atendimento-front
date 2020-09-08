import React from "react";

import Menu from "../../componets/menu/Menu";
import Layout from '../../componets/Layout';
import ContainerCadastroAtendimentos from '../../componets/atendimentos/ContainerCadastroAtendimentos/ContainerCadastroAtendimentos'
import CadAtendimentos from '../../componets/atendimentos/CadAtendmentos/CadAtendimentos'
const CadastroAtendimento = ()=>{

    return(
        <Layout>
            <Menu/>
            <ContainerCadastroAtendimentos>
                <CadAtendimentos/>

            </ContainerCadastroAtendimentos>

        </Layout>

    )
}
export default CadastroAtendimento