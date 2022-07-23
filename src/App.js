import './App.css';
import Forecast from './forecast/Forecast';
import SingleDay from './singleDay/SingleDay';

function App() {
  const today = new Date();
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  }
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
          days[today.getDay()]
        }, {
          months[today.getMonth()]
        } {
          today.getDate()
        }, {
          today.getFullYear()
        }
      </p>
      <Forecast />
      <div className="upcoming">
          <SingleDay />
          <SingleDay />
          <SingleDay />
          <SingleDay />
          <SingleDay />
      </div>
    </div>
  );
}

export default App;
