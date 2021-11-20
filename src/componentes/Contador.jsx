import React, {useState} from 'react'
import '../StyleComponents/Contador.css'
export default function Contador() {

    const [cont, setCont] = useState(0)
    const aumentar = () => {
        setCont(cont+1)
    }
    const restar = () => {
        setCont(cont-1)
    }
  
  
  
    return (
        <div className="contenedor-con">
            <h1 className="titulo">Soy un contador Fabricio!! : {cont}</h1>
            <button
                className="btn" 
                onClick={aumentar}
            >Aumentar</button>
            <button
                className="btn"
                onClick={restar}
            >Reducir</button>
        </div>
    )
}
