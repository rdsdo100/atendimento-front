import React from 'react';
import { Container ,Card , HeaderCard , Titulo , CardForm  }  from './styles'

interface ICards {
titulo: string
}

const CardList: React.FC<ICards> = ({children,  titulo}) => {
  return(

      <Container>
        <Card>
            <HeaderCard>
                <Titulo>{titulo}</Titulo>
            </HeaderCard>
            <CardForm>
               {children}
            </CardForm>
        </Card>

      </Container>
  )

};

export default CardList;