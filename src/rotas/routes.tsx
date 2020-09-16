import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import Login from "../pages/login/Login"
import Home from "../pages/home/Home";
import LoginServer from "../services/LoginServer";
import CadastroAtendimento from "../pages/cadastroAtendimento";
import NotFound from "../pages/notFound/NotFound";
import CadastroUsuario from "../pages/cadastroUsuario/CadastroUsuarios";
import CadastroEmpresa from "../pages/cadastroEmpresas/CadastroEmpresas";

const loginServer = new LoginServer()

const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {

    const routeComponent = (props: any) => (
      loginServer.islogin()
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

      <Route component={Home} path='/home' ></Route>
        <PrivateRoute component={CadastroAtendimento} path='/cadastro-atendimento' ></PrivateRoute>
        <PrivateRoute component={CadastroUsuario} path='/cadastro-usuario' ></PrivateRoute>
        <PrivateRoute component={CadastroEmpresa} path='/cadastro-empresa' />
<Route component={NotFound} path="*" ></Route>
    </Switch>
  </BrowserRouter>
  )
}

  export default Routes