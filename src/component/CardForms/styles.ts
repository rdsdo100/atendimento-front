import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Card = styled.div`
position: absolute;
 display: grid;
    grid-template-columns: 900px;
    grid-template-rows: 40px 660px ;

    grid-template-areas:
    'header'
    'card';
   
   
border-radius: 5px;  
    border: black 2px solid;

`;

export const HeaderCard = styled.div`
  
   grid-area: header;
   display: flex;
   flex-direction: column;
   background: #8F8F8F;

   height: 40px;
  
    border-bottom: black 1px solid;
   
`;

export const Titulo = styled.h1``;

export const CardForm = styled.div`
 grid-area: card;
`;