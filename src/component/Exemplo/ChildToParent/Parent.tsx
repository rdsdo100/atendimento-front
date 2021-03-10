import React, { useState } from 'react';

import { Container } from './styles';

import Child from './Child'

interface Props {
    readonly name: string;
}

const Parent: React.FC<Props> = ({ name }) => {

    const [word, setWord] = useState<string>("you forgot who you are")

    const handleLabel = (novoLabel: string) => {
        setWord(novoLabel);
    }

    return (
        <Container color={"#FAF9F5"} colorName={"#5B709B"}>
            <p>{name}</p>
            <h6>says: {word}</h6>
            <Child  changeLabel={handleLabel}></Child>
        </Container>
    );
};

export default Parent; 
