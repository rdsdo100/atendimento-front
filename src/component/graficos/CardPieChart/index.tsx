import React from 'react';
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Cell
   
} from 'recharts'

import { Container, LegendContainer, SideLeft, SideRight , Legend  } from './styles'




const CardPieChart: React.FC = () => {



const data = [
    {
        name: "entradas",
        value: 150,
        percent: 20,
        color: '#e44c4e'
    },
    {
        name: "Saidas",
        value: 100,
        percent: 80,
        color: '#f7931b'
    }
]



    return (

        <Container>
            


            
           
           


            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>



                    
            
   

        </Container>)
}
export default CardPieChart;

//  https://react-google-charts.com/