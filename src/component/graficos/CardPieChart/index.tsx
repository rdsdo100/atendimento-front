import React from 'react';
import { Cell, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

import { Container, LegendContainer, SideLeft, SideRight , Legend  } from './styles'




const CardPieChart: React.FC = () => {



   const data = [
        {
          name: '18-24',
          uv: 31.47,
          pv: 2400,
          fill: '#8884d8',
        },
        {
          name: '25-29',
          uv: 26.69,
          pv: 4567,
          fill: '#83a6ed',
        },
        {
          name: '30-34',
          uv: 15.69,
          pv: 1398,
          fill: '#8dd1e1',
        },
        {
          name: '35-39',
          uv: 8.22,
          pv: 9800,
          fill: '#82ca9d',
        },
        {
          name: '40-49',
          uv: 8.63,
          pv: 3908,
          fill: '#31224b',
        },
        
       
      ];
      
    return (
        <Container>
             
             <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="uv">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.fill} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>



                    
            
   

        </Container>)
}
export default CardPieChart;

//  https://react-google-charts.com/