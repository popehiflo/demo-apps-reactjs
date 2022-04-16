import { useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 5000);
  
  return (
    <div className="App-header">
      <h2>La hora es: {time}</h2>
    </div>
  )
}

export default Clock;
