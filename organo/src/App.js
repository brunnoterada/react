
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';

function App() {

  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder='Digite seu Nome'/>
      <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
      <CampoTexto label='Imagem' placeholder='Digite o caminho da imagem'/>

    </div>
  );
}

export default App;
