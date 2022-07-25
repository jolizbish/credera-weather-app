import './SingleDay.css';

const SingleDay = ({ fahrenheit, forecast, day }) => {
    const fahrenheitTemp = Math.round(1.8 * (forecast?.temp.max -273.15) + 32);
    const celciusTemp = Math.round(forecast?.temp.max -273.15);    

    return (
        <div className="single-day">
            <p>{day}</p>
            <div className="weather-icon" style={{ backgroundImage: `url(/${forecast?.weather[0].main}.png)`, backgroundSize: "38px", height: 36, width: 38}}></div>
            <p>{fahrenheit ? fahrenheitTemp : celciusTemp}°</p>
        </div>
    );
}

export default SingleDay;