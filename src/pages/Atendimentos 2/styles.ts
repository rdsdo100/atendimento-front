import styled from 'styled-components';

export const Container = styled.div`
 height: 100vh;
 position: relative;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.secundary};

   
`;

export const GridTemplate = styled.div`

display: grid;
grid-template-rows:  auto;
    grid-template-columns:   50% auto ;
    grid-template-areas:
     "CF CL";
     grid-gap: 5px;

`;

export const GridConteinerForm = styled.div`
position: relative;
grid-area: CF;

`;

export const GridConteinerList = styled.div`
grid-area: CL;
`;

export const Form = styled.form`
 
 position: relative;
  margin: 10px;
 display: flex;
 flex-direction: column
   
`;