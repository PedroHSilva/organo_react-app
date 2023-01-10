import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid'

const App = () => {

    const [colaboradores, setColaboradores] = useState([])

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Frontend',
            cor: '#57c278',
        },
        {
            id: uuidv4(),
            nome: 'Backend',
            cor: '#82cffa',
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#a6d157',
        },
        {
            id: uuidv4(),
            nome: 'UX Design',
            cor: '#e06b69',
        },
        {
            id: uuidv4(),
            nome: 'Marketing',
            cor: '#db6ebf',
        },
        {
            id: uuidv4(),
            nome: 'Gestão',
            cor: '#ffba05',
        },
    ])

    const aoNovoColaboradorAdd = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    const deletarColaborador = () => {
        console.log("Deletando...")
    }

    const mudarCorDoTime = (cor, nome) => {
        setTimes(times.map(time => {
            if (time.nome === nome) {
                time.cor = cor
            }
            return time
        }))
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario times={ times.map(time => time.nome) } aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdd(colaborador) } />
            { times.map(time => <Time 
                mudarCor={mudarCorDoTime}
                key={ time.nome } 
                time={ time }
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                aoDeletar={deletarColaborador}
            />) } 
            <Rodape/>           
        </div>
    );
}

export default App
