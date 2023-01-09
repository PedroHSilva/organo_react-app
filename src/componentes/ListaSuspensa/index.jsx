import './index.css'

const ListaSuspensa = (props) =>
    <div className='lista-suspensa'>
        <label>{ props.label }</label>
        <select name="" id="" onChange={event => props.aoAlterado(event.target.value) } required={ props.obrigatorio } value={ props.valor }>
            { props.itens.map(item => <option key={ item }>{ item }</option>) }
        </select>
    </div>
export default ListaSuspensa