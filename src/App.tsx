import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import WeatherAPI from './interface/WeatherAPI';
import WeatherData from './props/WeatherData/WeatherData';
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';

//import fetch from './fetch.svg';

const App = () => {
  const [data, setData] = useState<WeatherAPI>({});

  useEffect((): any => {
    return (data.success == undefined) ? setData(WeatherData) : null;
  }, [data]);

  return (
    <div className="app--main">
      <Location data={data} />
      <Weather data={data} />
    </div>
  );
}

export default App;
