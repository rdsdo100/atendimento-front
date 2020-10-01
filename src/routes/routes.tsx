import React from "react";
import {Route , BrowserRouter  ,Switch, Redirect} from 'react-router-dom'




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
        <PrivateRoute component={<h1>CadastroAtendimento</h1>} path='/cadastro-atendimento' ></PrivateRoute>
<Route component={<h1>NotFound</h1>} path="*" ></Route>
    </Switch>
  </BrowserRouter>
  )
}

  export default Routes