import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

const name = "João"
  const nome = 'Maria'

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1"></Evento>
      <Form></Form>
    </div>
  );
}

export default App;
