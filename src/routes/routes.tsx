import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Empresas from "../pages/Empresas";
import Atendimentos from "../pages/Atendimentos";
import Graficos from "../pages/Graficos";
import Usuario from "../pages/Usuario";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";



const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {

  const auth = useSelector((state: ApplicationState) => state.auth.auth)
  
  const routeComponent = (props: any) => (
    auth
      ? React.createElement(component, props)
      : <Redirect to='/' /> 
  );

  return <Route {...rest} render={routeComponent} />;
};


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo


    <Route component={Login} path='/' exact ></Route>
        <PrivateRoute component={Home} path='/home' ></PrivateRoute>
        <PrivateRoute component={Usuario} path='/usuario'></PrivateRoute>
        <PrivateRoute component={Atendimentos} path='/atendimentos' ></PrivateRoute>
        <PrivateRoute component={Graficos} path='/graficos'></PrivateRoute>
        <PrivateRoute component={Empresas} path='/empresas' ></PrivateRoute>
        <PrivateRoute component={ErrorPage} path='*'></PrivateRoute>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes


