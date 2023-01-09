import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

const App = () => {

    const [colaboradores, setColaboradores] = useState([])

    const times = [
        {
            nome: 'Frontend',
            corPrimaria: '#57c278',
            corSecundaria: '#d9f7e9'
        },
        {
            nome: 'Backend',
            corPrimaria: '#82cffa',
            corSecundaria: '#e8f8ff'
        },
        {
            nome: 'Devops',
            corPrimaria: '#a6d157',
            corSecundaria: '#f0f8e2'
        },
        {
            nome: 'UX Design',
            corPrimaria: '#e06b69',
            corSecundaria: '#fde7e8'
        },
        {
            nome: 'Marketing',
            corPrimaria: '#db6ebf',
            corSecundaria: '#fae9f5'
        },
        {
            nome: 'Gestão',
            corPrimaria: '#ffba05',
            corSecundaria: '#fff5d9'
        },
    ]

    const aoNovoColaboradorAdd = (colaborador) => {
        debugger
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario times={ times.map(time => time.nome) } aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdd(colaborador) } />
            { times.map(time => <Time 
                key={ time.nome } 
                time={ time }
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />) } 
            <Rodape/>           
        </div>
    );
}

export default App
