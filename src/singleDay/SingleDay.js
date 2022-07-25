import './SingleDay.css';

const SingleDay = ({ isFahrenheit, forecast, day }) => {
    const fahrenheitTemp = Math.round(1.8 * (forecast?.temp.max -273.15) + 32);
    const celciusTemp = Math.round(forecast?.temp.max -273.15);    

    return (
        <div class="single-day">
            <div className="divider"></div>
            <div className="info">
                <p>{day}</p>
                {/* NOTE: left this inline style so it could render the correct weather icon conditionally */}
                <div className="weather-icon" style={{ backgroundImage: `url(/${forecast?.weather[0].main}.png)`, backgroundSize: "38px", height: 36, width: 38}}></div>
                <p>{isFahrenheit ? fahrenheitTemp : celciusTemp}°</p>
            </div>
        </div>
    );
}

export default SingleDay;