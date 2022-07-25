import './App.css';
import Forecast from './forecast/Forecast';
import { longDays, shortMonths } from './lookups';

const App = () => {
  const today = new Date();

  return (
    <div className="app">
      <div >
        <div className="location-pin" style={{ backgroundImage: "url(/location-pin.png)", backgroundSize: "12px", height: 15, width: 12}}></div>
        <div className="location">
          Dallas, TX
        </div>
      </div>
      <div className="date">
        {
          longDays[today.getDay()]
        }, {
          shortMonths[today.getMonth()]
        } {
          today.getDate()
        }, {
          today.getFullYear()
        }
      </div>
      <Forecast day={today.getDay()}/>
    </div>
  );
}

export default App;
