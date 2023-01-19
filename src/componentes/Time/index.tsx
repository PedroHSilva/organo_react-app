import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador'
import './index.css'

interface TimeProps {
    corPrimaria: string,
    nome: string,
    colaboradores: IColaborador[]
}

const Time = (props:TimeProps) => {

    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={ { backgroundColor: hexToRgba(props.time.cor, 0.3) } }>
            <input onChange={ event => props.mudarCor(event.target.value, props.time.nome) } type="color" className='input-color' value={props.time.cor} />
            <h3 style={ { borderColor: props.time.cor } }>{ props.time.nome } </h3>
            <div className='colaboradores'>
                { props.colaboradores.map(colaborador => {
                    console.log("test");
                    return (
                    <Colaborador 
                        key={ colaborador.nome } 
                        nome={ colaborador.nome }
                        cargo={ colaborador.cargo }
                        imagem={ colaborador.imagem }
                        corPrimaria={ props.time.cor }
                        aoDeletar={ props.aoDeletar }
                    />
                    )
                } )}
            </div>
        </section>
    )
}

export default Time