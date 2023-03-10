import './index.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={()=>props.aoDeletar(props.nome)} />
            <div className='cabecalho' style={ { backgroundColor:props.corPrimaria } }>
                <img src={ props.imagem } alt="Pedro Silva" />
            </div>
            <div className='rodape'>
                <h4>{ props.nome }</h4>
                <h5>{ props.cargo }</h5>
                <div className='favoritar'>
                    {props.favorito ? 'favorito' : 'Não favorito'}
                </div>
            </div>
        </div>
    )
}

export default Colaborador