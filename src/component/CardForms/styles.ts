import styled from 'styled-components';

export const Container = styled.div`
    position: relative
`;

export const Card = styled.div`
border-radius: 5px;  
    border: black 2px solid;
 display: flex;
  flex-direction: column;
  
    background-color:  ${props => props.theme.colors.secundary};


`;

export const HeaderCard = styled.div`

   display: flex;
   justify-content: center;
   background: ${props => props.theme.colors.primary};
   height: 40px;
    border-bottom: black 1px solid;
   
`;

export const Titulo = styled.h1`
 color: ${props => props.theme.colors.gray}
`;

export const CardForm = styled.div`
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
`;