import React, { useEffect, useState } from 'react';
import Forecast from '../../../interface/Forecast';
import Hour from '../../../interface/Hour';


import Day from './Day/Day';
import Hourly from './Hourly/Hourly';

interface Props {
    forecast: Array<any>,
    icon: string
}

const Today = (props: Props) => {
    return (
        <div className="forecast--main">
            <Day forecast={props.forecast} />
            <Hourly forecast={props.forecast} icon={props.icon} />
        </div>
    )
}

export default Today;