import './App.css';
import { useState } from 'react';
import Clock from './components/Clock';
import Salary from './components/Salary';
import SalaryObjectInput from './components/SalaryObjectInput';

const usersData = [
  { id: 'pool', name: 'Pool', age: '20' },
  { id: 'tirza', name: 'Tirza', age: '20' },
  { id: 'jose', name: 'Jose', age: '20' },
  { id: 'mickela', name: 'Mickela', age: '10' },
]

function App() {
  const [usuario, setUsuario] = useState(null);
  const [contador, setContador] = useState(0);
  const handleOnchangeUser = (event) => {
    setUsuario(event.target.value);
  }
  const handleOnclickAdd = () => {
    setContador(contador + 1);
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
      <div className="App-header">
        <h2>Valor del contador es: {contador}</h2>
        <div style={{display:'flex'}}>
          <button onClick={handleOnclickAdd}>+</button>
          <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
      </div>
      <Clock />
      <Salary />
      <SalaryObjectInput />
    </div>
  );
}

export default App;
