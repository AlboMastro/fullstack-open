import axios from "axios";

const getCountries = () => { 
    const request = axios.get(`https://restcountries.com/v3.1/all`)
    return request.then(response => response.data)
}

const getWeather = ( lat, lon, key ) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    return request.then(response => response.data)
}
const countryServ = { getCountries, getWeather }

export default countryServ 

