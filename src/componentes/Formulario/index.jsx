import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './index.css'

const Formulario = () => {
    const times = [
        'Frontend',
        'Backend',
        'Devops',
        'UX Design',
        'Marketing',
        'Gestão'
    ]
    return (
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <CampoTexto label="Nome" name="nome" placeholder="Digite se nome" />
            <CampoTexto label="Cargo" name="cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" name="imagem" placeholder="Escolha sua imagem" />
            <ListaSuspensa itens={times} label ="Time"></ListaSuspensa>
            <Botao>Criar Perfil</Botao>
        </form>
    </section>
    )
}

export default Formulario