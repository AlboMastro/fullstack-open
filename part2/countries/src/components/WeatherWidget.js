import { useEffect, useState } from "react";
import countryServ from "../services/CountriesServices"

export const WeatherWidget = ({ country }) => {
    const [weather, setNewWeather] = useState([]);
    const lat = country.latlng[0]
    const lng = country.latlng[1]
    const key = '31e6465dc2690d850cbffc8b0e86fb0d'
    // const key = 'f8e2dbfecfc3bc00bff5a4ec8864d485'

    useEffect(() => {
      countryServ.getWeather(lat, lng, key).then((weather) => {
        setNewWeather(weather);
        console.log(weather);
      });
    }, [lat,lng]);

    return ( 
        <>
          <p> Temperature in {country.name.common} is currently: {weather.main?.temp} degrees Celsius </p>
          <p> Wind is {weather.wind?.speed} m/s </p>
          {/* <img src={`http://openweathermap.org/img/wn/${weather.weather[0]?.icon}.png`} alt="Weather Icon"></img> */}
        </>
    )
}