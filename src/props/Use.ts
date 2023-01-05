import WeatherAPI from "../Interface/WeatherAPI";

const Use = <WeatherAPI>{
  "request": {
    "type": "City",
    "query": "New York, United States of America",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "New York",
    "country": "United States of America",
    "region": "New York",
    "lat": "40.714",
    "lon": "-74.006",
    "timezone_id": "America/New_York",
    "localtime": "2022-01-04 10:05",
    "localtime_epoch": 1567850700,
    "utc_offset": "-4.0"
  },
  "current": {
    "observation_time": "02:05 PM",
    "temperature": 15,
    "weather_code": 113,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    "weather_descriptions": [
      "Sunny"
    ],
    "wind_speed": 0,
    "wind_degree": 0,
    "wind_dir": "N",
    "pressure": 1011,
    "precip": 0,
    "humidity": 78,
    "cloudcover": 0,
    "feelslike": 15,
    "uv_index": 5,
    "visibility": 16
  },
  "forecast": {
    "2022-01-04": {
      "date": "2022-01-04",
      "date_epoch": 1214870400,
      "astro": {
        "sunrise": "05:29 AM",
        "sunset": "08:31 PM",
        "moonrise": "03:24 AM",
        "moonset": "07:37 PM",
        "moon_phase": "Waning Crescent",
        "moon_illumination": 4
      },
      "mintemp": 0,
      "maxtemp": 0,
      "avgtemp": 19,
      "totalsnow": 0,
      "sunhour": 14.5,
      "uv_index": 4,
      "hourly": [
        {
          "time": "0",
          "temperature": 27,
          "wind_speed": 7,
          "wind_degree": 201,
          "wind_dir": "SSW",
          "weather_code": 113,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
            "Sunny"
          ],
          "precip": 1.8,
          "humidity": 80,
          "visibility": 9,
          "pressure": 1011,
          "cloudcover": 15,
          "heatindex": 25,
          "dewpoint": 20,
          "windchill": 24,
          "windgust": 11,
          "feelslike": 25,
          "chanceofrain": 0,
          "chanceofremdry": 0,
          "chanceofwindy": 0,
          "chanceofovercast": 0,
          "chanceofsunshine": 0,
          "chanceoffrost": 0,
          "chanceofhightemp": 0,
          "chanceoffog": 0,
          "chanceofsnow": 0,
          "chanceofthunder": 0,
          "uv_index": 6
        }
      ]
    },
    "2022-01-05": {
      "date": "2022-01-05",
      "date_epoch": 1214870400,
      "astro": {
        "sunrise": "05:29 AM",
        "sunset": "08:31 PM",
        "moonrise": "03:24 AM",
        "moonset": "07:37 PM",
        "moon_phase": "Waning Crescent",
        "moon_illumination": 4
      },
      "mintemp": 0,
      "maxtemp": 0,
      "avgtemp": 19,
      "totalsnow": 0,
      "sunhour": 14.5,
      "uv_index": 4,
      "hourly": [
        {
          "time": "0",
          "temperature": 27,
          "wind_speed": 7,
          "wind_degree": 201,
          "wind_dir": "SSW",
          "weather_code": 113,
          "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
          ],
          "weather_descriptions": [
            "Sunny"
          ],
          "precip": 1.8,
          "humidity": 80,
          "visibility": 9,
          "pressure": 1011,
          "cloudcover": 15,
          "heatindex": 25,
          "dewpoint": 20,
          "windchill": 24,
          "windgust": 11,
          "feelslike": 25,
          "chanceofrain": 0,
          "chanceofremdry": 0,
          "chanceofwindy": 0,
          "chanceofovercast": 0,
          "chanceofsunshine": 0,
          "chanceoffrost": 0,
          "chanceofhightemp": 0,
          "chanceoffog": 0,
          "chanceofsnow": 0,
          "chanceofthunder": 0,
          "uv_index": 6
        }
      ]
    }
  }
}

export default Use;