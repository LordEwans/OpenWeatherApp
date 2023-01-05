import React from 'react';
import WeatherAPI from '../../Interface/WeatherAPI';

import './Location.css';

interface Props {
    data: WeatherAPI
}

const Location = (props: Props) => {
    return (
        <div className='location--main'>
            {props.data.current ? (
                <div className="location--child">
                    <h2 className="text-4xl">{props.data.location.name}</h2>
                    <h1 className="text-4xl">{`${props.data.current.temperature} ºC`}</h1>
                    <div className="condition">
                        <h3 className="text-2xl">{props.data.current.weather_descriptions}</h3>
                        <img src={'../../img/animated/day.svg'} className="" />
                    </div>
                </div>
            ) : (
                <div className="location--child">
                    <h2 className="text-4xl">Location</h2>
                    <h1 className="text-4xl">0 ºC</h1>
                    <h3 className="text-2xl">Condition</h3>
                </div>
            )}
        </div>
    )
}

export default Location;