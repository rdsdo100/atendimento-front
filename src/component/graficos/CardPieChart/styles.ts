import styled from 'styled-components';


interface ILegendProps {
    color: string
}

export const Container = styled.div`
  width : 1180px;
  height: 500px;
  margin: 10px ;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.width};
  border-radius: 7px;
  display:flex;

`;

export const SideLeft = styled.aside`

padding: 30px 20px;
>h2{
    margin-bottom: 20px;
}

`;

export const LegendContainer = styled.ul`
list-style: none;
max-height: 175px;
padding: 5px;
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
    

`;

export const  Legend = styled.li<ILegendProps>`
display: flex;
align-items: center;
margin-bottom: 14px;

>div{
  background-color: ${prop => prop.color}  ;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
}
>span {
    margin-left: 5px
}


`;

export const  SideRight = styled.main``;
               