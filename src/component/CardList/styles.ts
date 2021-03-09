import styled from 'styled-components';

export const Container = styled.div`
    position: relative
`;

export const Card = styled.div`
border-radius: 5px;  
    border: black 2px solid;
 display: flex;
  flex-direction: column;
  box-sizing:border-box;
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
 color: ${props => props.theme.colors.gray};
 font-family: roboto ;
`;

export const CardForm = styled.div`
position: relative;


    
    height: calc(100vh - 100px);
    
    overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 10px;
        }
    
        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.gray};
            border-radius: 10px;
        }
    
        ::-webkit-scrollbar-track {
            background-color: ${props => props.theme.colors.tertiary};
        }
    }


margin: 0;
display: flex;
flex-direction: column;


`;