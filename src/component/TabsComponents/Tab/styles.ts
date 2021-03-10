import styled from "styled-components";

export const NavTabs = styled.nav `
  width:1110px;
  height: 500px;
  background-color: ${props => props.theme.colors.primary};
  position: relative ;
  left: 70px;
  box-shadow: 0 0 1em black;
  display: flex;
  flex-direction: column;


`;
export const UL = styled.ul`
  list-style: none;
  top: 0;
`;
