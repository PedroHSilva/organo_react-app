import { useState } from 'react'
import './index.css'
const CampoTexto = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{ props.label }</label>
            <input 
                value={ props.valor }
                onChange={ aoDigitado }
                type="text" 
                placeholder={ props.placeholder } 
                name={ props.name } 
                required={ props.obrigatorio } />
        </div>
    )
}

export default CampoTexto