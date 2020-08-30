import {createGlobalStyle} from "styled-components"


export default createGlobalStyle `
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
       
        height: 100vm;
        width: 100vm;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
    
    input {
    padding-left: 5px;
    margin: 5px;
    border-radius: 5px;
    height: 35px;
}

select {
    padding-left: 5px;
    margin: 5px;
    border-radius: 5px;
    height: 35px;
}
option{
    padding-left: 5px;
    margin: 5px;
    border-radius: 5px;
    height: 35px;
}

button{
    padding: 0px 5px;
    margin: 5px;
    border-radius: 6px;
    height: 35px;
    font-family: Arial;
}
    

`;


//  