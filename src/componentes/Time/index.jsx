import Colaborador from '../Colaborador'
import './index.css'

const Time = (props) => {

    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={ { backgroundColor: props.time.corSecundaria } }>
            <input onChange={ event => props.mudarCor(event.target.value, props.time.nome) } type="color" className='input-color' value={props.time.corSecundaria} />
            <h3 style={ { borderColor: props.time.corPrimaria } }>{ props.time.nome } </h3>
            <div className='colaboradores'>
                { props.colaboradores.map(colaborador => {
                    console.log("test");
                    return (
                    <Colaborador 
                        key={ colaborador.nome } 
                        nome={ colaborador.nome }
                        cargo={ colaborador.cargo }
                        imagem={ colaborador.imagem }
                        corPrimaria={ props.time.corPrimaria }
                        aoDeletar={ props.aoDeletar }
                    />
                    )
                } )}
            </div>
        </section>
    )
}

export default Time