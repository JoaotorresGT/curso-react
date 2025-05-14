import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

const name = "João"
  const nome = 'Maria'

  return (
    <div className="App">
      <h1>Testando</h1>
      <Frase></Frase>
      <Frase></Frase>
      <SayMyName nome='João'></SayMyName>
      <SayMyName nome='Matheus'></SayMyName>
      <SayMyName nome={nome}></SayMyName>
      <Pessoa 
      nome='Rodrigo'
      idade="28"
      profissão="Programador"
      foto="https://via.placeholder.com/150"
      ></Pessoa>
    </div>
  );
}

export default App;
