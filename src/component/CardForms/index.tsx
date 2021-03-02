import React from 'react';
import { Container ,Card , HeaderCard , Titulo , CardForm  }  from './styles'



const CardForms: React.FC = ({children}) => {
  return(

      <Container>
        <Card>
            <HeaderCard>
                <Titulo>Cadastro de Usuário</Titulo>
            </HeaderCard>
            <CardForm>

               {children}

            </CardForm>


        </Card>

      </Container>
  )

};

export default CardForms;