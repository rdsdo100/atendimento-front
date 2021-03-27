import React from 'react';

import { H1 } from './styles'

const AlgoErrado: React.FC = () => {
    return (

        <div>

            <p>
                <b>
                    <a href={String(process.env.REACT_APP_HOME_LIGIN_ACESS)}>Voltar</a>
                </b>
            </p>
        </div>

    )
}
export default AlgoErrado