import axios from "axios";

const getCountries = () => { 
    const request = axios.get(`https://restcountries.com/v3.1/name/japan`)
    return request.then(response => response.data)
}

const countryServ = { getCountries }

export default countryServ 