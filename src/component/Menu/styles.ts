import styled from "styled-components";
import {Link} from "react-router-dom";
import {ImMenu} from "react-icons/im";

export const Container = styled.div`
  background-color: aqua;
  width: 100vw;
  height: 100vh;
    
`;

export const Nav = styled.nav`

  position: absolute;
  background-color: ${props => props.theme.colors.primary};
  width:  350px;
  height: 100%;
  top: 0;
  left: -350px;

`;

export const A = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  display: block;
  padding: 20px 5px;
  padding-left: 20px;
  color: white;


  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
    color: black;
  }
  
`;

export const Label = styled.label`

    padding: 0;
    position: relative;
    z-index: 1;

`;

export const UL = styled.ul`
    list-style: none;
    top: 70px;
    width: 100%;
    position: absolute;
`;

export  const  ImMenuIcons = styled(ImMenu)`
  font-size: 35px;
  position: relative;
  color: ${props => props.theme.colors.black};
  padding: 0;
  margin: 0;
`;

export  const InputCheck = styled.input`
  display: none;
  &[type = 'checkbox']:checked ~ ${Nav} {
    transform: translateX(350px);
  }
`;
export const  Span = styled.span`
  position: relative;
  top: 0px;
`;