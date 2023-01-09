import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './index.css'

const Formulario = (props) => {

    const [nome, setNome]       = useState('')
    const [cargo, setCargo]     = useState('')
    const [imagem, setImagem]   = useState('')
    const [time, setTime]       = useState('Frontend')
    
    function aoSalvar (e) {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Frontend')
    }
    
    return (
    <section className="formulario">
        <form onSubmit={ aoSalvar }>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" name="nome" placeholder="Digite se nome" />
            <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" name="cargo" placeholder="Digite seu cargo" />
            <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" name="imagem" placeholder="Escolha sua imagem" />
            <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} itens={props.times} label ="Time"></ListaSuspensa>
            <Botao>Criar Perfil {time}</Botao>
        </form>
    </section>
    )
}

export default Formulario