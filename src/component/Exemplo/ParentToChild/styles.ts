import styled from 'styled-components';

interface Props {
    color: string;
    colorName: string;
}

export const Container = styled.div<Props>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.colorName};
  margin-left: 64px;
  margin-top: 32px;
  margin-bottom: 16px;
  margin-right: 16px;
  padding: 1px 16px 16px 16px;
  width: max-content;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 600;
  min-width: 223px;
`;


