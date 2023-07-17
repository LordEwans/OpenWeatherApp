import React, { useEffect, useState } from 'react';
import Forecast from '../../../../interface/Forecast';
import Hour from '../../../../interface/Hour';

interface Props {
    forecast: Array<any>,
    icon: string
}

const Hourly = (props: Props) => {
    return (
        <div className="hourly--main">
            {props.forecast.map((i: Forecast, id) =>
                id === 0 ? (
                    <div className="hourly--child">
                        {i.hourly.map((i: Hour) =>
                            <div className="hourly--grandchild">
                                <span className="font-sans text-base lg:text-lg" title="Time of the Day">{NumberToTime(i.time)}</span>
                                <img src={props.icon/*'../../img/animated/snowy-6.svg'*/} alt="Weather Description" className="hourly--grandchild-img" title="Forecast Description" />
                                <span className="font-sans text-base lg:text-lg" title="Average Temperatures">{`${i.temperature}º`}</span>
                            </div>
                        )}
                    </div>
                ) : null)}
        </div>
    )
}

const NumberToTime = (num: string) => {
    if (num.length == 1) {
        return `0${num}:00`;
    } else if (num.length == 3) {
        return `0${num.split("")[0]}:00`;
    } else {
        return `${num.split("0")[0]}:00`
    }
}

export default Hourly;