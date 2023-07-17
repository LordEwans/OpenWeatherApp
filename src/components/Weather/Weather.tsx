import React, { useEffect, useState } from 'react';
import WeatherAPI from '../../interface/WeatherAPI';
import Daily from './Daily/Daily';
import Today from './Today/Today';

import './Weather.css';

interface Props {
    data: WeatherAPI
}

const Weather = (props: Props) => {
    const [data, setData] = useState(props.data);
    const [forecastObj, setForecastObj] = useState<any>({});
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        setData(props.data);
        setForecastObj(props.data.forecast)
        return data.current ? setForecast(Object.values(forecastObj)) : null;
    }, [props.data, forecastObj]);


    return (
        // Runner.instance_.gameOver = () => {}
        <div className='weather--main'>
            {data.current ? (
                <div className="weather--child">
                    <Today forecast={forecast} icon={props.data.current.weather_icons.toString()} />
                    <Daily forecast={forecast} icon={props.data.current.weather_icons.toString()} />
                </div>
            ) : (
                <div className="weather--child">
                    <img src={'../../img/animated/thunder.svg'} className="w-[25%]" />
                    <span className="font-sans">Couldn't Fetch Weather Information</span>
                </div>
            )}
        </div>
    )
}

export default Weather;