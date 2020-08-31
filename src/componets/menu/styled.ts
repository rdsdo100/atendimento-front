import styled from 'styled-components'

export const Container  = styled.div `

> header {
   width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    background-color: #5b859a;
position: fixed;
}

> .menu-icon {
    position: fixed;
    font-size: 25px;
    font-weight: bold;
    padding: 5px;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: #5b859a;
    color: #fff;
    cursor: pointer;
    transition: 0.4s;
    left: 2px;
    top: 0;
    z-index: 1;
}

 >.menu-icon:hover {


    background-color: #ffffff ;

}

> #chk {
    display: none;
}

> .menu {
    height: 100%;
    position: fixed;
    background-color: #222;
    top: 0;
    overflow: hidden;
    transition: all 0.2s;


}

> #principal {
    width: 300px;
    left: -300px;
}

> ul{
    list-style: none;
}

> ul li a {
    display: block;
    font-size: 18px;
    font-family: Arial;
    padding: 10px;
    border-bottom: solid 1px #000;
    color: #ccc;
    text-decoration: none;
    transition: all .2s;
}

> ul li span {
    float: right;
    padding-right: 10px;
}

> ul li a:hover {
    background-color: #5b859a;

}

> .voltar {

    margin-top: 60px;
    background-color: #111;
    border-left: solid 5px #444;
}

> #chk:checked ~ #principal {
    transform: translateX(300px);
}

> .bg{
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    background-color: rgba(0,0,0,.6);
    display: none;


}

> #chk:checked  ~ .bg {
    display: block;
}

> #cursos {
    width: 250px;
    left: -250px;
}

> #cursos:target {
    transform: translateX(250px);
    box-shadow: 2px 2px 5px 2px rgba(0,0,0,.5);
}



`;
