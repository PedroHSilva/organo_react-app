import React from 'react'
import './index.css'

interface BannerProps {
    enderecoImagem: string,
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) =>
    <header className='banner'>
        <img src={enderecoImagem} alt={textoAlternativo} />
    </header>

export default Banner