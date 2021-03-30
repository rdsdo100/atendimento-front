import React from 'react';
import { PopUpBox } from './styles'

const CardPopUp: React.FC = ({ children }) => (

  <PopUpBox style={{ display: "" }}>
    {children}
  </PopUpBox>

);

export default CardPopUp;