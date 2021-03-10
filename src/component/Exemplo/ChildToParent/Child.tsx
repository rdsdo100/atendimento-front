import React from 'react';

import { Container } from './styles';

interface Props {
  
    readonly changeLabel: (arg0: string) => void;
}

const Child: React.FC<Props> = ({changeLabel }) => {

    const sendNewLabel = () => {
            const novoLabel = "Rubens"
            changeLabel(novoLabel);
    }

    return (
        <Container color={"#5B709B"} colorName={"#FAF9F5"}>
            
          
            <button onClick={sendNewLabel}>Send</button>
        </Container>
    );
};

export default Child;
