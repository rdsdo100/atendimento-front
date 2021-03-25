import React, { useState } from 'react'
import { Nav, A, Label, UL, ImMenuIcons, InputCheck, Span, DivMenu } from './styles'

interface IRotasMenu {
    id: number
    nomeMenu: string
    rotaMenu: string
}
interface IStyleMenu {
    displayMenu: string
}

const Menu: React.FC = () => {

    const rotas: IRotasMenu[] = [
        { id: 1, nomeMenu: 'Home', rotaMenu: '/home' },
        { id: 2, nomeMenu: 'Atendimentos', rotaMenu: '/atendimentos' },
        { id: 3, nomeMenu: 'Empresas', rotaMenu: '/empresas' },
        { id: 4, nomeMenu: 'Usuário', rotaMenu: '/usuario' },
        { id: 5, nomeMenu: 'Graficos', rotaMenu: '/graficos' }
    ]

    const [listRotas, setListRotas] = useState<IRotasMenu[]>(rotas)
    const [styleMenu, setStyleMenu] = useState<IStyleMenu>({ displayMenu: "none" })


   
    

    function handleChechMenu() {

        if (document.getElementById("check")) {
            (document.getElementById("check") as HTMLInputElement).checked = false;
        }

        setStyleMenu({ displayMenu: 'none' })

    }

    function sairSistema() {
        localStorage.removeItem("Authorization")
       
    }

    return (
        <div>

            <DivMenu
                style={{ display: styleMenu.displayMenu }}
                onClick={() => { handleChechMenu() }}></DivMenu>
            <div>
                <InputCheck type='checkbox' id='check' ></InputCheck>
                <Label htmlFor="check">
                    <Span onClick={() => { setStyleMenu({ displayMenu: '' }) }} >
                        <ImMenuIcons />
                    </Span>
                </Label>

                <Nav>

                    <UL>
                        {/*} <li onClick={()=>{handleChechMenu()}} ><A to="/home">Home</A></li>
                        <li onClick={()=>{handleChechMenu()}} ><A to="/atendimentos"   >Atendimentos</A></li>
                        <li onClick={()=>{handleChechMenu()}} ><A to="/empresas">Empresas</A></li>
                        <li onClick={()=>{handleChechMenu()}} ><A to="/usuario">Usuário</A></li>
                        <li onClick={()=>{handleChechMenu()}} ><A to="/graficos">Graficos</A></li>
    <li><A to='/' onChange={() => { sairSistema() }} >Sair</A></li>*/}

                        {
                            listRotas.map((rota: IRotasMenu) => {

                                return <li
                                    key={rota.id}
                                    onClick={() => { handleChechMenu() }}>
                                    <A
                                        to={String(rota.rotaMenu)}>
                                        {rota.nomeMenu}
                                    </A>
                                </li>

                            })
                        }

                        <li><A to='/' onClick={() => { sairSistema() }} >Sair</A></li>




                    </UL>

                </Nav>
            </div>
        </div>

    )
}

export default Menu