import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

const App = () => {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
        <Banner/>
        <Formulario 
          aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdd(colaborador) }
        />
        <Time titulo="Frontend" />
        <Time titulo="Backend" />
    </div>
  );
}

export default App
