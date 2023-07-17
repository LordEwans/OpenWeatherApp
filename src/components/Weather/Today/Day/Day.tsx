import React, { useEffect, useState } from 'react';
import Forecast from '../../../../interface/Forecast';

interface Props {
    forecast: Array<any>
}

const Day = (props: Props) => {
    return (
        <div className="day--main">
            {props.forecast.map((i: Forecast, id) =>
                id === 0 ? (
                    <div className="day--child">
                        <div title="Day of the Week">
                            <span className="font-serif text-base lg:text-xl">{`${new Date(i.date).toLocaleString("en-UK", { weekday: "long" })}`}</span>
                            <span> · </span>
                            <span className="font-serif text-base lg:text-xl text-opacity-50 opacity-50">{`Today`}</span>
                        </div>
                        <span className="font-sans text-sm lg:text-base" title="Average Temperatures">{`${i.mintemp}º ${i.maxtemp}º`}</span>
                    </div>
                ) : null)}
        </div>
    )
}

export default Day;