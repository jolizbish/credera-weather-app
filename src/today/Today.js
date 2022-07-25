import './Today.css';

const Today = ({ forecast, isFahrenheit }) => {
    const fahrenheitTemp = Math.round(1.8 * (forecast?.temp -273.15) + 32);
    const celciusTemp = Math.round(forecast?.temp -273.15);    

    return (
        <div className="today">
            <div className="temperature">{isFahrenheit ? fahrenheitTemp : celciusTemp}°</div>
            <div className="main-weather-icon" style={{ backgroundImage: `url(/${forecast?.weather[0].main}.png)`, backgroundSize: "40px", height: 40, width: 40}}></div>
            <div className="current-details">
                <div>{forecast?.weather[0].description}</div>
                <div>{Math.round(forecast?.wind_speed)} mph</div>
            </div>
        </div>
    );
}

export default Today;