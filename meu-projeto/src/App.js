import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

const name = "João"
  const nome = 'Maria'

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional></Condicional>
    </div>
  );
}

export default App;
