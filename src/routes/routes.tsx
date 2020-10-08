import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import CadastroUsuario from "../pages/CadastroUsuario";



/*

const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {

    const routeComponent = (props: any) => (
      loginServer.islogin()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );

    return <Route {...rest} render={routeComponent}/>;
};
*/
const Routes =  () =>{
  return(
  <BrowserRouter>
    <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo


      <Route path='/' exact ><h1>Possivel login!</h1></Route>
      <Route component={Home} path='/home' ></Route>
      <Route component={CadastroUsuario} path='/cadastro-usuario'></Route>
    

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes