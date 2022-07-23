import './Forecast.css';
import Today from '../today/Today';
import Toggle from '../toggle/Toggle';

function Forecast() {
  return (
    <div className="Forecast"  style={{ backgroundImage: "url(/dallas.png)", backgroundSize: "670px", height: 368, width: 670 }}>
        <Today />
        <Toggle />
    </div>
  );
}

export default Forecast;
