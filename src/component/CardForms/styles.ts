import styled from 'styled-components';

export const Container = styled.div`



    position: relative;

> div {
    margin: 0; 
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0) }
    background-color:  ${props => props.theme.colors.secundary};


`;

export const Card = styled.div`


border-radius: 5px;  
    border: black 2px solid;
 display: grid;
    grid-template-columns: 900px;
    grid-template-rows: 40px 500px ;
    background-color:  ${props => props.theme.colors.secundary};
    grid-template-areas:
    'header'
    'card';
   
   


`;

export const HeaderCard = styled.div`

   grid-area: header;
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
 grid-area: card;
`;