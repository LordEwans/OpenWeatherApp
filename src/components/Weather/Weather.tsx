import React, { useEffect, useState } from 'react';
import WeatherAPI from '../../Interface/WeatherAPI';

import './Weather.css';

interface Props {
    data: WeatherAPI
}

const Weather = (props: Props) => {
    const [data, setData] = useState(props.data);
    const [forecast, setForecast] = useState<ObjectConstructor>();

    useEffect(() => {
        setData(props.data);
        let dat: any = data;
        return data.current ? setCast(dat) : null;
    }, [props.data, forecast]);

    const setCast = (dat) => {
        setForecast(dat.forecast);
        console.log(forecast);
    }


    return (
        <div className='weather--main'>
            {data.current ? (
                <div className="weather--child">
                    <span>{`${data.location.country}`}</span>
                    <span className="font-sans">Temp: {`${data.current.temperature} ºC`}</span>
                </div>
            ) : (
                <div className="weather--child">
                    <img src={'./animated/thunder.svg'} />
                    <span className="font-sans">Couldn't Fetch Weather Information</span>
                </div>
            )}
        </div>
    )
}

export default Weather;