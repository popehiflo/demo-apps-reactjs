import './App.css';
import { useState } from 'react';

const usersData = [
  { id: 'pool', name: 'Pool', age: '20' },
  { id: 'tirza', name: 'Tirza', age: '20' },
  { id: 'jose', name: 'Jose', age: '20' },
  { id: 'mickela', name: 'Mickela', age: '10' },
]

function App() {
  const [usuario, setUsuario] = useState(null);
  const handleOnchangeUser = (event) => {
    setUsuario(event.target.value);
  }
  return (
    <div className="App">
      <div className="App-header">
        <h2>Usuario seleccionado es: {usuario}</h2>
        <select name='user' onChange={handleOnchangeUser}>
          <option value=''>Seleccione una opcion</option>
          {usersData.map(userItem => (
            <option key={userItem.id} value={userItem.id}>{userItem.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
