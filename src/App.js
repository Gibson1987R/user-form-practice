import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ahora un nuevo proyecto con un formulario
        </p>
      </header>
      <Formulario/>
    </div>
  );
}

export default App;
