import React from 'react';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import MessageBoxComponent from '../../component/MessageBoxComponent';
import { Component   } from './styles';

const Contatos: React.FC = () => {
    return (

        <Component>
            <LayoutPrincipal titulo='Contatos'>
                
            <MessageBoxComponent>
                <h2>ola</h2>
            </MessageBoxComponent>

            </LayoutPrincipal>
        </Component>

    )
}
export default Contatos