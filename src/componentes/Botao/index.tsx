
import { ReactElement } from 'react'
import React from 'react'
import './index.css'

interface BotaoProps {
    children: ReactElement | string
}
const Botao = (props: BotaoProps) => {
    return (
        <button className="botao">{ props.children }</button>
    )
}

export default Botao