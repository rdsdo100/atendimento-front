import React, { FormEvent } from 'react';
import InputCadastro from '../../component/inputs/InputCadastro';
import InputId from '../../component/inputs/InputId';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tabs } from '../../component/TabsComponents';
import Tab from '../../component/TabsComponents/Tab';
import { Container, Form } from './styles'

const Empresas: React.FC = () => {

    /*useEffect(() => {

        api.get('empresa',
            { headers: { authorization: auth } })
            .then(response => {
                
            }).catch(erro => {

               
            })



    }, [])*/

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        alert("Ta indo!!!!")
        limparCampos()

    }

    function limparCampos() {

        if ((document.getElementById("idEmpresa")) &&
            (document.getElementById("codigoEmpresa")) &&
            (document.getElementById("nomeEmpresa"))) {

            (document.getElementById("codigoEmpresa") as HTMLInputElement).value = "";
            (document.getElementById("nomeEmpresa") as HTMLInputElement).value = "";
            (document.getElementById("idEmpresa") as HTMLInputElement).value = "";
        }
    }

    function carregarCampos(idEmpresa: string, codigoEmpresa: string, nomeEmpresa: string) {

        if ((document.getElementById("idEmpresa")) &&
            (document.getElementById("codigoEmpresa")) &&
            (document.getElementById("nomeEmpresa"))) {

            (document.getElementById("codigoEmpresa") as HTMLInputElement).value = codigoEmpresa;
            (document.getElementById("nomeEmpresa") as HTMLInputElement).value = nomeEmpresa;
            (document.getElementById("idEmpresa") as HTMLInputElement).value = idEmpresa;
        }

        if ((document.getElementById("tab1Empresas")) &&
            (document.getElementById("tab2Empresas"))) {
            (document.getElementById("tab1Empresas") as HTMLInputElement).checked = true;
            (document.getElementById("tab2Empresas") as HTMLInputElement).checked = false;

        }
    }

    return (

        <Container>
            <LayoutPrincipal titulo='Empresas'>

                <Tab>
                    <Tabs IdNameTab="tab1Empresas"
                        defaultCheckedTab={true}
                        text='Cadastrar Usuário'>

                        <Form onSubmit={handleSubmit} >

                            <InputId id='idEmpresa' >Id</InputId>
                            <InputCadastro id='codigoEmpresa'>Codigo da Empresa</InputCadastro>
                            <InputCadastro id='nomeEmpresa' >Nome da Empresa</InputCadastro>

                            <button type="submit" >Enviar</button>

                        </Form>

                    </Tabs>
                    <Tabs IdNameTab="tab2Empresas" text='Lista de Usuarios'>
                        <CardListTab>

                        </CardListTab>
                    </Tabs>

                </Tab>

            </LayoutPrincipal>
        </Container>

    )
}
export default Empresas