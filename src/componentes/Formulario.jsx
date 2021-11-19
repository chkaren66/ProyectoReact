import React from 'react';
import "../StyleComponents/Formulario.css"
function Formulario(props) {
    return (
        <div>
           <form action="">
                <input className="for" type="text" name="Email" id="Email" placeholder="Email Address"/>
                <button className="for"> Sing up for GitHub</button>
            </form> 
        </div>
    );
}

export default Formulario;