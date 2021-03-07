import styled from 'styled-components';

export const Container = styled.div`
 height: 100vh;
 position: relative;
  margin: 0 auto;
  background-color:  ${props => props.theme.colors.primary};

   
`;

export const Form = styled.form`
 
 position: relative;
  margin: 40px;
 display: flex;
 flex-direction: column

   
`;
