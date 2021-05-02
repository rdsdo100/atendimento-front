import React from "react";
import { Route, BrowserRouter, Switch, Redirect, useHistory } from 'react-router-dom'
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Empresas from "../pages/Empresas";
import Atendimentos from "../pages/Atendimentos";
import Graficos from "../pages/Graficos";
import Usuario from "../pages/Usuario";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";
import AlgoErrado from "../pages/AlgoErrado";
import RelatorioAtendimentos from "../pages/RelatorioAtendimentos";
import Contatos from "../pages/Contatos";
import ValidadoeCpfCnpj from "../pages/ValidadoeCpfCnpj";


const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {

  const history = useHistory()
 // const auth = useSelector((state: ApplicationState) => state.auth.auth)
 const auth = localStorage.getItem('Authorization')
  const routeComponent = (props: any) => (
    auth
      ? React.createElement(component, props)
      : history.push('/algoErrado')
  );

  return <Route {...rest} render={routeComponent} />;
};


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch> // não deixa mais de uma rota ser chamada ao mesmo tempo

        <Route component={Login} path='/' exact ></Route>
        <Route component={AlgoErrado} path='/algoErrado' ></Route>
        <PrivateRoute component={Home} path='/home' ></PrivateRoute>
        <PrivateRoute component={ValidadoeCpfCnpj} path='/cpf-cnpj'></PrivateRoute>
        <PrivateRoute component={Contatos} path='/contatos' ></PrivateRoute>
        <PrivateRoute component={Usuario} path='/usuario'></PrivateRoute>
        <PrivateRoute component={Atendimentos} path='/atendimentos' ></PrivateRoute>
        <PrivateRoute component={Graficos} path='/graficos'></PrivateRoute>
        <PrivateRoute component={Empresas} path='/empresas' ></PrivateRoute>
        <PrivateRoute component={RelatorioAtendimentos} path='/relatorio-atendimentos'></PrivateRoute>
        <Route component={ErrorPage} path='*'></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Routes


