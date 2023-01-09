import Colaborador from '../Colaborador'
import './index.css'

const Time = (props) => {

    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={ { backgroundColor: props.time.corSecundaria } }>
            <h3 style={ { borderColor: props.time.corPrimaria } }>{ props.time.nome } </h3>
            <div className='colaboradores'>
                { props.colaboradores.map(colaborador => <Colaborador 
                    key={ colaborador.nome } 
                    nome={ colaborador.nome }
                    cargo={ colaborador.cargo }
                    imagem={ colaborador.imagem }
                />) }
            </div>
        </section>
    )
}

export default Time