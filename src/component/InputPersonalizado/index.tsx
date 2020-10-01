import React from 'react'
import "./index.css"

const InputPersonalizado: React.FC = () => {
    return(

        <section>
    <form action="">
        <h1>Material Design Input with pure CSS</h1>
        <div className="input-container">
            <input id="name" className="input" type="text"  />
            <label className="label" htmlFor="name">Nome</label>
        </div>
    </form>
</section>
       
    )
}

export default InputPersonalizado