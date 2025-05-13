import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

const name = "João"
  const nome = 'Maria'

  return (
    <div className="App">
      
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
