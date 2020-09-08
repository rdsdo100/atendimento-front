import styled from 'styled-components'

export const Container  = styled.div `

grid-area: containerForm;

> form {

display: flex;
flex-direction: column;
background-color: blue;

>textarea{
border: black solid 1px;
}

}



`;
