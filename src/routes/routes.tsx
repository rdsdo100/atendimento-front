import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'
import CadastroUsuario from "../pages/CadastroUsuario";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Atendimentos from "../pages/Atendimentos";
import Empresas from "../pages/Empresas";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";


const  PrivateRoute =  ({component, isAuthenticated, ...rest}: any) => {

  const auth = useSelector((state: ApplicationState) => state.auth.auth)
  let authorization: boolean
  
if(auth== ''){
  authorization = false
}else{
  authorization = true

}

    const routeComponent = (props: any) => (
      authorization
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
      <Route component={CadastroUsuario} path='/cadastro-usuario'></Route>
      <PrivateRoute component={Atendimentos} path='/atendimentos' ></PrivateRoute>
      <PrivateRoute component={Empresas} path='/empresas' ></PrivateRoute>
      <PrivateRoute component={ErrorPage} path='*'></PrivateRoute>

    </Switch>
  </BrowserRouter>
  )
}

  export default Routes