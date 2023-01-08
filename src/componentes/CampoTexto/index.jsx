import './index.css'
const CampoTexto = (props) =>
    <div className='campo-texto'>
        <label htmlFor="">{ props.label }</label>
        <input type="text" placeholder={"digite o seu " + props.label } name={ props.name } />
    </div>

export default CampoTexto