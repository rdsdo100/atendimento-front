import React, {ChangeEvent, FormEvent, useState} from 'react'
import {useHistory} from 'react-router-dom'
import LoginServer from "../../services/LoginServer";
import { Component,LoginBox, H2, UserBox , Input , Label , A} from './styles'

const Login: React.FC = () => {

    const history = useHistory()
    const [usuario , setUsuario] = useState<string>()
    const [senha , setSenha] = useState<string>()
    const [error , setError] = useState<string>()

    function habdleInputUsuario(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setUsuario(String(value))
    }

    function habdleInputSenha(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setSenha(String(value))
    }

    async function handleEntrar(event: FormEvent) {
        event.preventDefault()
        localStorage.removeItem("Authorization")
        const loginServer= new LoginServer()
        const login = await loginServer.login(String(usuario) , String(senha))
        const  token = localStorage.getItem("Authorization")
        if(token){
            history.push('/home')
        }else{
            setError("Login Invalido!")
        }
    }

return(
    <Component>
        <LoginBox className='login-box'>
            <H2>Login</H2>
            <form onSubmit={handleEntrar}>
                <UserBox className='user-box'>
                    <Input type='text' required
                           name="usuario"
                           onChange={habdleInputUsuario}

                    />
                    <Label>Usuário</Label>
                </UserBox>
                <UserBox className='user-box'>
                    <Input type='password' required
                           name="senha"
                           onChange={habdleInputSenha}
                    />
                    <Label>Senha</Label>
                </UserBox>
                <span>{error}</span>
                <A type='submit'
                >Entrar</A>
            </form>
        </LoginBox>
    </Component>
)
}
export default Login

//https://mariosouto.com/inputs-materializados-com-css/