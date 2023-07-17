import axios from 'axios';

import Use from '../Use';
import WeatherAPI from '../../interface/WeatherAPI';

// import logo from '../../logo.svg';

// "homepage": "https://LordEwans.github.io/OpenWeatherApp",
const WeatherData = (): WeatherAPI => {
    let long: number;
    let lat: number;

    let data = <WeatherAPI>{};
    
    data = Use;

    const fetchData = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });

        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: `${lat}, ${long}`,
            forecast_days: 7,
            hourly: 1,
            interval: 1
        }

        const url = process.env.REACT_APP_API_URL;

        await axios.get(url, { params })
            .catch(err => {
                console.error(err);
            })
            .then(res => {
                const dat: any = res;
                return data.error ? console.error(data.error) : data = dat.data;
            });
    }

    fetchData();
    return data;
}

export default WeatherData;