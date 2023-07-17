import React, { useEffect, useState } from 'react';
import Hour from '../../../interface/Hour';

interface Props {
    hourly: any[]
}

const Img = (props: Props) => {
    return (
        <div>
            {props.hourly.map((i: Hour) =>
            (
                <div>
                    <img src={i.weather_icons.toString()/*'../../img/animated/snowy-2.svg'*/} alt="Weather Description" className="daily--child-img" title="Weather Description" />
                </div>
            )
            )}
        </div>
    )
}

export default Img;