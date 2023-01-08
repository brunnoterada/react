
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {
  const [colaboradores, setColaboradore] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => setColaboradores()}/> 

    </div>
  );
}

export default App;
