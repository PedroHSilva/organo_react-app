import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import './index.css'

const Formulario = (props) => {

    const [nome, setNome]           = useState('')
    const [cargo, setCargo]         = useState('')
    const [imagem, setImagem]       = useState('')
    const [time, setTime]           = useState('Frontend')
    const [nomeTime, setNomeTime]   = useState('')
    const [corTime, setCorTime]     = useState('Frontend')
    
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

    function cadastrarTime(e) {
        e.preventDefault()
        props.cadastrarTime({nome: nomeTime, cor: corTime})
    }
    
    return (
    <section className="formulario">
        <form onSubmit={ aoSalvar }>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <Campo type="text" valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" name="nome" placeholder="Digite se nome" />
            <Campo type="text" valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" name="cargo" placeholder="Digite seu cargo" />
            <Campo type="text" valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" name="imagem" placeholder="Escolha sua imagem" />
            <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} itens={props.times} label ="Time"></ListaSuspensa>
            <Botao>Criar Perfil {time}</Botao>
        </form>
        <form onSubmit={ cadastrarTime }>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <Campo type="text" valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} obrigatorio label="Nome" name="nome" placeholder="Digite o nome do time" />
            <Campo type="color" valor={corTime} aoAlterado={valor => setCorTime(valor)} obrigatorio label="Cor" name="cargo" placeholder="Informe a cor do time" />
            <Botao>Crir novo time</Botao>
        </form>
    </section>
    )
}

export default Formulario