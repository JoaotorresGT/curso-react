import './App.css';
import OutraLista from './components/OutraLista';


function App() {
  const meusItens = ['react', 'vue', 'angular',]

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <OutraLista itens={meusItens}></OutraLista>
      <OutraLista itens={[]}></OutraLista>
      
    </div>
  )
}

export default App;
