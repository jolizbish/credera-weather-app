import './SingleDay.css';

const SingleDay = ({ fahrenheit, forecast, day }) => {
    const fahrenheitTemp = Math.round(1.8 * (forecast?.temp.max -273.15) + 32);
    const celciusTemp = Math.round(forecast?.temp.max -273.15);

    console.log(forecast?.weather.main)
    

    return (
        <div className="single-day">
            <p>{day}</p>
            <div className="weather-icon" style={{ backgroundImage: `url(/${forecast?.weather[0].main}.png)`, backgroundSize: "40px", height: 40, width: 40}}></div>
            <p>{fahrenheit ? fahrenheitTemp : celciusTemp}°</p>
        </div>
    );
}

export default SingleDay;