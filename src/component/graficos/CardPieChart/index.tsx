import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Cell, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { api } from '../../../services/api';
import { ApplicationState } from '../../../store';

import { Container, LegendContainer, SideLeft, SideRight , Legend  } from './styles'


interface IEmpresasGraficos {
  codigoEmpresa:  string
  count: string
}


const CardPieChart: React.FC = () => {





const [lisEmpresasAtendimento , setLisEmpresasAtendimento] = useState<IEmpresasGraficos[]>([{
  codigoEmpresa:  '', count :'0' 
}])
const auth = useSelector((state: ApplicationState) => state.auth.auth)

useEffect(() => {

    api.get<IEmpresasGraficos> ('atendimento/graficos',
        { headers: { authorization: auth } })
        .then(response => {
            const resposta: any = response.data



            setLisEmpresasAtendimento(resposta)
            
            
               
        }).catch(erro => {

        })

}, [] )



  const COLORS = ['#0088FE', '#ff0000', '#FFBB28', '#FF8042' , '#000000'];
   const data = lisEmpresasAtendimento
      
    return (
        <Container>
             
             <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="count"  
                    
                    >

                        {
                          
                            data.map((indicator , index) => (
                                <Cell key={indicator.codigoEmpresa} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>



                    
            
   

        </Container>)
}
export default CardPieChart;

//  https://react-google-charts.com/