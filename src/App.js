import { useState } from 'react';
import './App.css';
import Forecast from './forecast/Forecast';
import { longDays, shortMonths } from './lookups';

const App = () => {
  const [today, setToday] = useState(new Date());

  return (
    <div className="App">
      <div className="Location">
        {/* <img src="../public/location-pin.png" className="Location" alt="location" /> */}
        <p>
          Dallas, TX
        </p>
      </div>
      <p className="Date">
        {
          longDays[today.getDay()]
        }, {
          shortMonths[today.getMonth()]
        } {
          today.getDate()
        }, {
          today.getFullYear()
        }
      </p>
      <Forecast day={today.getDay()}/>
    </div>
  );
}

export default App;
