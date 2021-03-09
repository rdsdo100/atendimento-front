import styled from 'styled-components';

export const Container = styled.div`
 height: 100vh;
 position: relative;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.secundary};

   
`;


export const GridTemplate = styled.div`

display: grid;
grid-template-rows:  40px calc(100vh - 40px);
    grid-template-columns: 40px  700px auto ;


    grid-template-areas:
    "MH MH MH" 
     "CK CF CL";
    
   

    
   

`;
export const GridConteinerHeader = styled.div`
grid-area: MH;

`;

export const GridConteinerForm = styled.div`
position: relative;
grid-area: CF;
padding: 10px;


`;

export const GridConteinerList = styled.div`
grid-area: CL;
padding: 10px;
`;

export const Form = styled.form`
 
 position: relative;
  margin: 10px;
 display: flex;
 flex-direction: column

   
`;
