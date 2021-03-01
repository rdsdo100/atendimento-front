import React from 'react';
import ok from '../../assets/Error.png'
import {IMG , H1} from './styles'

const ErrorPage: React.FC = () => {
    return(
        
<div>
    <IMG src={ok}  />
<H1> &lt; Error Page	&gt;</H1>
</div>

    )
}
export default ErrorPage