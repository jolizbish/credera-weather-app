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

        this.handleToggle = this.handleToggle.bind(this);
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

    handleToggle(e) {
        this.setState({
            isFahrenheit: !this.state.isFahrenheit
        })
    }

    render() {
        return (
            <div className="forecast">
                <div className="overview" >
                    <div id="big-cloud-1" alt="Cloud 1"></div>
                    <div id="big-cloud-2" alt="Cloud 2"></div>
                    <Today forecast={this.state.currentWeather} isFahrenheit={this.state.isFahrenheit}/>
                    <Toggle isFahrenheit={this.state.isFahrenheit} handleToggle={this.handleToggle} />
                </div>
                <div className="upcoming">
                    {this.state.fiveDayForecast.map((day,index)=> {
                        return <SingleDay 
                            key={index} 
                            forecast={day} 
                            isFahrenheit={this.state.isFahrenheit} 
                            day={shortDays[this.calculateWeekday(this.props.today.getDay(), 0)]}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default Forecast;
