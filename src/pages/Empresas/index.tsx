import React, { ChangeEvent, FormEvent} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CardForms from '../../component/CardForms';
import InputCadastro from '../../component/inputs/InputCadastro';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import Menu from '../../component/Menu';
import { ApplicationState } from '../../store';
import { Container, Form } from './styles'



const Empresas: React.FC = () => {

    const history = useHistory()
    
    const auth = useSelector((state: ApplicationState) => state.auth.auth)

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

    function handleImputAtendimento(event: ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target

        
    }
    
    return (

        <Container>
            <LayoutPrincipal titulo='Empresas'>
            <CardForms titulo={"Cadastro de Empresas"}>      
            <Form onSubmit={handleSubmit} >
                

                <InputCadastro>Codigo da Empresa</InputCadastro>
                <InputCadastro>Nome da Empresa</InputCadastro>
                
                <button type="submit" >Enviar</button>
                
            </Form>
            </CardForms>
            </LayoutPrincipal>
        </Container>

    )
} 
export default Empresas