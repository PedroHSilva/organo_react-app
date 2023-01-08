import './index.css'
const CampoTexto = (props) =>
    <div className='campo-texto'>
        <label>{ props.label }</label>
        <input type="text" placeholder={ props.placeholder } name={ props.name } />
    </div>

export default CampoTexto