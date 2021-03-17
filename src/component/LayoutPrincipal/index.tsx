import React from 'react';
import Menu from '../Menu';
import { BodyLayout, Container, HeadLayout , H1}  from './styles'

interface ILayoutPrincipal {
  titulo: string
}

const LayoutPrincipal: React.FC <ILayoutPrincipal> = ({children, titulo}) => {
  return(

      <Container>
        <HeadLayout>
          <Menu></Menu>
          <H1>{titulo}</H1>
          <h3 style={{margin: '0 15px' , color: '#bfbfbf'}}>usuario</h3>
        </HeadLayout>
        <BodyLayout>
        {children}
        </BodyLayout>
      </Container>
  )

};

export default LayoutPrincipal;