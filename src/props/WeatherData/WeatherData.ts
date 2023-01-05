import axios from 'axios';

import Use from '../Use';
import WeatherAPI from '../../Interface/WeatherAPI';

//import fetch from './fetch.svg';

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

        // await axios.get(url, { params })
        //     .catch(err => console.error(err))
        //     .then(res => {
        //         const dat: any = res;
        //         // setData(dat.data);
        //         return data.error ? console.log(data.error) : null;
        //     });
    }

    fetchData();
    for (let index = 0; index < 2; index++) {
        const element = data.current[index];
        console.log(element);
    }
    const date = new Date();
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getUTCDate()}`);

    return data;
}

export default WeatherData;