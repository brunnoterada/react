import { useState } from 'react'
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  const [colaboradores, setColaboradores] = useState([])

  return (
    <div className="App">
        <Banner /> 
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 
        <Time nome="Programação"/>
        <Time nome="Front-End"/>
        <Time nome="Data Science"/>
    </div>
);
}

export default App;
