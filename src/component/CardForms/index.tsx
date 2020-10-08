import React from 'react';
import Input from "../Input";
import { Container ,Card , HeaderCard , Titulo , CardForm  }  from './styles'



const CardForms: React.FC = () => {
  return(

      <Container>
        <Card>
            <HeaderCard>
                <Titulo>Cadastro de Usuário</Titulo>
            </HeaderCard>
            <CardForm>

                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />

            </CardForm>


        </Card>

      </Container>
  )

};

export default CardForms;