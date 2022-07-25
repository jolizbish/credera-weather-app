const express = require('express')
const app = express()
const port = 3001
const axios = require('axios');

app.get('/getDallasWeather', (req, res) => {
    // Dallas long/lat and API key are hardcoded under id and appid respectively
    const API = `https://api.openweathermap.org/data/3.0/onecall?lat=32.7767&lon=-96.7970&exclude=hourly,minutely,alerts&appid=`;
    axios.get(API)
        .then(response => {
                res.header('Access-Control-Allow-Origin', '*')
                res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
                res.send(response.data)
            }).catch(err => {
                console.error('ERROR:', err)
                res.send(err);
            })
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));