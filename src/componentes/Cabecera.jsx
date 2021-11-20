import React from 'react'
import "../StyleComponents/Cabecera.css"
function Cabecera(props) {
    return (
        <div>
            {/* <h1>Where the world builds software</h1> */}
            {/* <p>Millions of developers and companies build, ship, and maintain their software on GitHub-the largest and most advanced development platform in the world.</p> */}
            <h1>{props.titulo}</h1>
            <p>{props.contenido}</p>
        </div>
    );
}

export default Cabecera;