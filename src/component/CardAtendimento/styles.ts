import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100px;
    width: calc(100% - 20px);
    border: 1px solid black;
    border-radius: 8px;
    margin: 10px;
    background-color: ${props => props.theme.colors.primary};
`;

export const LI = styled.li`

    position: relative;
    list-style: none;
    color: ${props => props.theme.colors.gray};
    padding: 10px
`;

export const Header = styled.h1`
    position: relative;
    font-size: 24pt;
`;

export const Descripiton = styled.p`
    position: relative
`;

export const DataAtentendimento = styled.label`
    position: relative
`;

export const ButtonDelete = styled.button`
    position: relative
`;

export const  ButtonUdate = styled.button`
    position: relative
`;






