import React from 'react';
import { Container ,Card , HeaderCard , Titulo , CardListComponnt  }  from './styles'
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
            <CardListComponnt>
               {children}
            </CardListComponnt>
        </Card>

      </Container>
  )

};

export default CardList;