import React from 'react'
import LayoutPrincipal from '../../component/LayoutPrincipal';


 const Home: React.FC = () => {


    let  teste = { 
        ok : 'rubens' ,
        sobrenome: 'Diego'
        }
        
        let testeJ = JSON.stringify(teste)


        localStorage.setItem('ok' , testeJ)

        const testeLocal = localStorage.getItem('ok')


        const reconvertido = JSON.parse(String(testeLocal))
        console.log(reconvertido)



return(
<LayoutPrincipal titulo="Home" >
   



</LayoutPrincipal>

)
}
export default Home

//https://mariosouto.com/inputs-materializados-com-css/