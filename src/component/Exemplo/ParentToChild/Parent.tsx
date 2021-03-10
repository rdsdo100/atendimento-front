import React, { useRef } from 'react';

import { Container } from './styles';

import Child from './Child'


interface Props {
    readonly name: string;
}

interface RefObject {
    alertLeave: () => void;
    alertBack: () => void;
}

const Parent: React.FC<Props> = ({ name }) => {
    const myRef = useRef<RefObject>(null)

    const handleLeave = () => {
        if (myRef.current) {
            myRef.current.alertLeave();
        }
    }

    const handleBack = () => {
        if (myRef.current) {
            myRef.current.alertBack();
        }
    }
    return (
        <Container color={"#296766"} colorName={"#F1B656"} onMouseLeave={handleLeave} onMouseOver={handleBack}>
            <p>{name}</p>
            <h6>is he looking for Nemo?</h6>
            <Child name={"Nemo"} ref={myRef}></Child>
        </Container>
    );
};

export default Parent;
