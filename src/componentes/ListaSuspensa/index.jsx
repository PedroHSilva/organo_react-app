import './index.css'

const ListaSuspensa = (props) =>
    <div className='lista-suspensa'>
        <label>{ props.label }</label>
        <select name="" id="">
            { props.itens.map(item => <option key={ item }>{ item }</option>) }
        </select>
    </div>
export default ListaSuspensa