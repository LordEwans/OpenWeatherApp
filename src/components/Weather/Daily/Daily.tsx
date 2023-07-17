import React, { useEffect, useState } from 'react';
import Forecast from '../../../interface/Forecast';
import Img from './Img';

interface Props {
    forecast: Array<any>,
    icon: string
}

const Daily = (props: Props) => {
    return (
        <div className="daily--main">
            {props.forecast.map((i: Forecast, id) =>
                id > 0 ? (
                    <div className="daily--child">
                        <span className="font-serif text-sm lg:text-base" title="Day of the Week">{`${new Date(i.date).toLocaleString("en-UK", { weekday: "long" })}`}</span>
                        <Img hourly={i.hourly} />
                        <span className="font-sans text-sm lg:text-base" title="Average Temperatures">{`${i.mintemp}º ${i.maxtemp}º`}</span>
                    </div>
                ) : null)}
        </div>
    )
}

export default Daily;