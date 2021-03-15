import { type } from 'node:os';
import React, { ButtonHTMLAttributes } from 'react';

import { Container }  from './styles'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;



interface Ibackground {
tt?: IButtonProps
    colorb : string

}



const ButtonAtendimentos: React.FC<Ibackground> = ({children  ,colorb, ...rest    }) => (
    <Container {...rest}  style={{background: colorb  }} >
        {children}
    </Container>
);

export default ButtonAtendimentos;