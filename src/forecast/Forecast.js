import './Forecast.css';
import React from 'react';
import Today from '../today/Today';
import Toggle from '../toggle/Toggle';
import SingleDay from '../singleDay/SingleDay';
import { shortDays } from '../lookups';
import axios from 'axios';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isFahrenheit: true,
            currentWeather: null,
            fiveDayForecast: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getDallasWeather') 
            .then(response => {
                this.setState({ 
                    fiveDayForecast: response.data.daily.slice(0,5),
                    currentWeather: response.data.current
                })
            })
            .catch(err => console.error(err))
    };

    calculateWeekday(today, daysAhead) {
        if (today + daysAhead > 6) {
            return daysAhead + today - 7;
        } else {
            return daysAhead + today;
        }
    }

    render() {
        return (
            <div className="forecast">
                <div className="overview" style={{ backgroundImage: "url(/dallas.png)", backgroundSize: "670px", height: 368, width: 670 }}>
                    <div id="big-cloud-1" style={{ backgroundImage: "url(/big-cloud-1.png)", backgroundSize: "155px", height: 101, width: 155}} alt="Cloud 1"></div>
                    <div id="big-cloud-2" style={{ backgroundImage: "url(/big-cloud-2.png)", backgroundSize: "213px", height: 125, width: 213}} alt="Cloud 2"></div>
                    <Today forecast={this.state.currentWeather} fahrenheit={this.state.fahrenheit}/>
                    <Toggle isFahrenheit={this.state.isFahrenheit} />
                </div>
                <div className="upcoming">
                    <SingleDay forecast={this.state.fiveDayForecast[0]} isFahrenheit={this.state.isFahrenheit} day={shortDays[this.calculateWeekday(this.props.today.getDay(), 0)]}/>
                    <div className="divider"></div>
                    <SingleDay forecast={this.state.fiveDayForecast[1]} isFahrenheit={this.state.isFahrenheit} day={shortDays[this.calculateWeekday(this.props.today.getDay(), 1)]} />
                    <div className="divider"></div>
                    <SingleDay forecast={this.state.fiveDayForecast[2]} isFahrenheit={this.state.isFahrenheit} day={shortDays[this.calculateWeekday(this.props.today.getDay(), 2)]} />
                    <div className="divider"></div>
                    <SingleDay forecast={this.state.fiveDayForecast[3]} isFahrenheit={this.state.isFahrenheit} day={shortDays[this.calculateWeekday(this.props.today.getDay(), 3)]} />
                    <div className="divider"></div>
                    <SingleDay forecast={this.state.fiveDayForecast[4]} isFahrenheit={this.state.isFahrenheit} day={shortDays[this.calculateWeekday(this.props.today.getDay(), 4)]} />
                </div>
            </div>
        );
    }
}

export default Forecast;
