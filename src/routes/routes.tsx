import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import CadastroUsuario from "../pages/CadastroUsuario";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Atendimentos from "../pages/Atendimentos";


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
      <PrivateRoute component={Home} path='/home' ></PrivateRoute>
      <PrivateRoute component={CadastroUsuario} path='/cadastro-usuario'></PrivateRoute>
      <PrivateRoute component={Atendimentos} phth='/atendimentos' ></PrivateRoute>
      <PrivateRoute component={ErrorPage} path='*'></PrivateRoute>

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes