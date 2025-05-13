import './App.css';

function App() {

const name = "João"
const newName = name.toUpperCase()

function sum(a, b) {
  return a + b
}


  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem"></img>
    </div>
  );
}

export default App;
