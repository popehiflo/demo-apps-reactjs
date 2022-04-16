import { useState } from 'react';

const Salary = () => {
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'hours') {
      setHours(value);
    } else {
      setPrice(value);
    }
  }

  const handleCalculate = () => {
    setSalary(hours * price);
  }

  return (
    <div className="App-header">
      <h2>Salario: {salary}</h2>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <label htmlFor="hours">Hours:</label>
        <input type="number" name="hours"  onChange={handleChange}/>
        <label htmlFor="salary">Rate by hour:</label>
        <input type="number" name="rate" id="salary" onChange={handleChange} />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  )
}

export default Salary;
