import React from "react";

import Menu from "../../componets/menu/Menu";
import Layout from '../../componets/Layout';
import ContainerCadastroAtendimentos from '../../componets/atendimentos/ContainerCadastroAtendimentos/ContainerCadastroAtendimentos'
import ListAtendidos from "../../componets/atendimentos/ListAtendidos"
import CadAtendimentos from '../../componets/atendimentos/CadAtendmentos'
import ItensListAtendimentos from '../../componets/atendimentos/ItensListAtendimentos'
import {ContainerListDia , ContainerListPendent } from "./styled"

const CadastroAtendimento = ()=>{

    return(
        <Layout>
            <Menu/>
            <ContainerCadastroAtendimentos>
                <CadAtendimentos/>
                <ListAtendidos>
                    <ContainerListDia>
                        <ItensListAtendimentos/>
                    </ContainerListDia>
                    <ContainerListPendent>
                        <ItensListAtendimentos/>
                    </ContainerListPendent>
                </ListAtendidos>
            </ContainerCadastroAtendimentos>

        </Layout>

    )
}
export default CadastroAtendimento