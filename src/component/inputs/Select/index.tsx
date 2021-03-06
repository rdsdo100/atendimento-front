import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

import { Container }  from './styles'

type ISelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<ISelectProps> = ({ ...rest }) => (
    <Container {...rest} />
);

export default Select;