import CampoTexto from "../CampoTexto"
import './index.css'

const Formulario = () =>
    <section className="formulario">
        <form>
            <h2>Preencha os dados para criar o perfil do colaborador</h2>
            <CampoTexto label="Nome" name="nome" />
            <CampoTexto label="Cargo" name="cargo" />
            <CampoTexto label="Imagem" name="imagem" />
        </form>
    </section>

export default Formulario