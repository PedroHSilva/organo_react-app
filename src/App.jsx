import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

const App = () => {

    const times = [
        {
            nome: 'Frontend',
            corPrimaria: '#57c278',
            corSegundaria: '#d9f7e9'
        },
        {
            nome: 'Backend',
            corPrimaria: '#82cffa',
            corSegundaria: '#e8f8ff'
        },
        {
            nome: 'Devops',
            corPrimaria: '#a6d157',
            corSegundaria: '#f0f8e2'
        },
        {
            nome: 'UX Design',
            corPrimaria: '#e06b69',
            corSegundaria: '#fde7e8'
        },
        {
            nome: 'Marketing',
            corPrimaria: '#db6ebf',
            corSegundaria: '#fae9f5'
        },
        {
            nome: 'Gestão',
            corPrimaria: '#ffba05',
            corSegundaria: '#fff5d9'
        },
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdd = (colaborador) => {
        console.log(colaboradores)
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdd(colaborador) } />
            {times.map(time => <Time nome={ time.nome } corPrimaria={ time.corPrimaria } corSegundaria={ time.corSegundaria }/>)}            
        </div>
    );
}

export default App
