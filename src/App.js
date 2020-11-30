
import './App.css';
import Formulario from './components/Formulario';
import Insignia from './components/Insignia';

function App() {
  return (
    <div className= 'container mt-2'>
      <div className='row'>
        <div className="App col-6">
          <Insignia/>
        </div>
        <div className='col-6'>
          <Formulario/>
        </div>
    </div>
    </div>
  );
}

export default App;
