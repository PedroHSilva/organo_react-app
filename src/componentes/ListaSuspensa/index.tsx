import './index.css'

interface ListaSuspensaProps {
    aoAlterado: (value: string) => void,
    itens: string[],
    label: string,
    obrigatorio: boolean,
    valor: string
}

const ListaSuspensa = (props: ListaSuspensaProps) =>
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select name="" id="" onChange={event => props.aoAlterado(event.target.value)} required={props.obrigatorio} value={props.valor}>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
export default ListaSuspensa