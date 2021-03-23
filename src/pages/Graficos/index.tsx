import React, { useEffect, useState } from 'react'
import CardPieChart from '../../component/graficos/CardPieChart';


import LayoutPrincipal from '../../component/LayoutPrincipal';
import { api } from '../../services/api';


 const Graficos: React.FC = () => {





return(
<LayoutPrincipal titulo="Graficos" >
   
<CardPieChart></CardPieChart>

</LayoutPrincipal>

)
}
export default Graficos

//https://mariosouto.com/inputs-materializados-com-css/