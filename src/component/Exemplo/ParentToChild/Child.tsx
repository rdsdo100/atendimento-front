import React, { Ref, useImperativeHandle, forwardRef, useState } from 'react';

import { Container } from './styles';

interface Props {
    readonly name: string;
    ref: Ref<RefObject>
}

interface RefObject {
    alertLeave: () => void;
    alertBack: () => void;
}

const Child = forwardRef((props: Props, ref: Ref<RefObject>) => {

    const [him, setHim] = useState<string>("")

    const alertLeave = () => {
        setHim("is looking for you");
    }

    const alertBack = () => {
        setHim("is back");
    }

    useImperativeHandle(ref, () => ({ alertLeave, alertBack }));
    
    return (
        <Container color={"#F1B656"} colorName={"#296766"}>
            <p>{props.name}</p>
            <span><h6>Marlin {him}</h6></span>
        </Container>
    );
});

export default Child;
