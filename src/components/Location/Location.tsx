import React from 'react';
import WeatherAPI from '../../interface/WeatherAPI';

import './Location.css';

interface Props {
    data: WeatherAPI
}

const Location = (props: Props) => {
    return (
        <div className='location--main'>
            {props.data.current ? (
                <div className="location--child">
                    <h2 className="text-2xl lg:text-4xl" title="Location">{props.data.location.name}</h2>
                    <h1 className="text-2xl lg:text-4xl" title="Temperature">{`${props.data.current.temperature} ºC`}</h1>
                    <div className="condition--main">
                        <h3 className="text-xl lg:text-2xl" title="Weather">{props.data.current.weather_descriptions}</h3>
                        <img src={/*props.data.current.weather_icons.toString()*/'../../img/animated/day.svg'} alt="Weather Description" className="condition--main-img" title="Weather Description" />
                    </div>
                </div>
            ) : (
                <div className="location--child">
                    <h2 className="text-2xl lg:text-4xl">No Location</h2>
                    <h1 className="text-2xl lg:text-4xl">0 ºC</h1>
                    <div className="condition--main">
                        <h3 className="text-xl lg:text-2xl" title="Weather">Condition</h3>
                        <img src={'../../img/animated/day.svg'} alt="Weather Description" className="condition--main-img" title="Weather Description" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Location;