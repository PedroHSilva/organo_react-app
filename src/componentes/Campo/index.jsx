import { useState } from 'react'
import './index.css'

const Campo = (props) => {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{ props.label }</label>
            <input 
                value={ props.valor }
                onChange={ aoDigitado }
                type={props.type} 
                placeholder={ props.placeholder } 
                name={ props.name } 
                required={ props.obrigatorio } />
        </div>
    )
}

export default Campo