import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import Login from "../pages/login/Login"
const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
          true
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

const Routes =  () =>{
  return(
  <BrowserRouter>
    <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo

      <Route component={Login} path='/' exact ></Route>
     {/* <PrivateRoute component={CadastroAtendimentos} path='/cadastro-atendimento' ></PrivateRoute>*/}

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes