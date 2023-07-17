interface Forecast {
        date?: string;
        date_epoch?: number;
        astro?: {
            sunrise?: string;
            sunset?: string;
            moonrise?: string;
            moonset?: string;
            moon_phase?: string;
            moon_illumination?: number;
        };
        mintemp?: number;
        maxtemp?: number;
        avgtemp?: number;
        totalsnow?: number;
        sunhour?: number;
        uv_index?: number;
        hourly?: Array<any>;
}

export default Forecast;