import React, { FormEvent } from 'react';
import InputCadastro from '../../component/inputs/InputCadastro';
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

    }

    return (

        <Container>
            <LayoutPrincipal titulo='Empresas'>

                <Tab>
                    <Tabs IdNameTab="tab1Empresas"
                        defaultCheckedTab={true}
                        text='Cadastrar Usuário'>

                        <Form onSubmit={handleSubmit} >


                            <InputCadastro>Codigo da Empresa</InputCadastro>
                            <InputCadastro>Nome da Empresa</InputCadastro>

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