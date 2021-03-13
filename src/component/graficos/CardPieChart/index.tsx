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
        value: 100,
        percent: 50,
        color: '#e44c4e'
    },
    {
        name: "Saidas",
        value: 100,
        percent: 50,
        color: '#f7931b'
    }
]



    return (

        <Container>
            <SideLeft>
                <h2>Relação</h2>
                <LegendContainer>
                    <Legend color="#f7931b">
                        <div>95%</div>
                        <span>Saidas</span>
                    </Legend>
                    <Legend color="#e44c4e">
                        <div>95%</div>
                        <span>Saidas</span>
                    </Legend>
                    
</LegendContainer>

</SideLeft>

            <SideRight>
           
               






            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>



                    
            
            </SideRight>

        </Container>)
}
export default CardPieChart;

//  https://react-google-charts.com/