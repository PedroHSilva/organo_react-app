
import './index.css'

interface CampoProps {
    type: string,
    label: string,
    valor: string,
    placeholder?: string,
    name: string,
    obrigatorio: boolean,
    aoAlterado: (valor: string) => void
}

const Campo = ({ type, label, valor, placeholder, name, aoAlterado, obrigatorio = false }: CampoProps) => {

    const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(event.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                value={valor}
                onChange={aoDigitado}
                type={type}
                placeholder={placeholder}
                name={name}
                required={obrigatorio}
            />
        </div>
    )
}

export default Campo