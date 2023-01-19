import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import {v4 as uuidv4 } from 'uuid'
import { IColaborador } from './compartilhado/interfaces/IColaborador';
import { ITime } from './compartilhado/interfaces/ITime';

const App = () => {

    const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

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

    const aoNovoColaboradorAdd = (colaborador: IColaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    const deletarColaborador = (nome:string) => {
        setColaboradores(colaboradores.filter((colaborador:IColaborador) => colaborador.nome !== nome))
    }

    const mudarCorDoTime = (cor:string, nome:string) => {
        setTimes(times.map(time => {
            if (time.nome === nome) {
                time.cor = cor
            }
            return time
        }))
    }

    const cadastrarTime = (novoTime:ITime) => {
        setTimes([...times,{ ...novoTime, id:uuidv4() }])
    }

    return (
        <div className="App">
            <Banner enderecoImagem="\imagens\banner.png" textoAlternativo="Banner" />
            <Formulario 
            cadastrarTime={cadastrarTime}
                times={ times.map(time => time.nome) } 
                aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdd(colaborador) } />
            { times.map(time => <Time 
                mudarCor={mudarCorDoTime}
                key={ time.nome } 
                time={ time }
                colaboradores={colaboradores.filter((colaborador:IColaborador) => colaborador.time === time.nome)}
                aoDeletar={deletarColaborador}
            />) } 
            <Rodape/>           
        </div>
    );
}

export default App
