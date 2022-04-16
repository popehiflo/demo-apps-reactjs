import { useState } from 'react';

const SalaryObjectInput = () => {
  const [form, setForm] = useState({});
  const [salary, setSalary] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ 
      ...form, 
      [name]: value 
    });
  }

  const handleCalculate = () => {
    setSalary(form.hours*form.rate*form.tax);
  }

  return (
    <div className="App-header">
      <h2>Salario Object Input: {salary}</h2>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <label htmlFor="hours">Hours:</label>
        <input type="number" name="hours"  onChange={handleChange}/>
        <label htmlFor="salary">Rate by hour:</label>
        <input type="number" name="rate" id="salary" onChange={handleChange} />
        <label htmlFor="tax">Tax:</label>
        <input type="number" name="tax" id="tax" onChange={handleChange} />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  )
}

export default SalaryObjectInput;
