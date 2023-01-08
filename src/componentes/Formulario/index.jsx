import CampoTexto from "../CampoTexto"
import './index.css'

const Formulario = () =>
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <CampoTexto label="Nome" name="nome" placeholder="Digite se nome" />
            <CampoTexto label="Cargo" name="cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" name="imagem" placeholder="Escolha sua imagem" />
        </form>
    </section>

export default Formulario