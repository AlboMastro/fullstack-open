import { WeatherWidget } from "./WeatherWidget";

export const CountryDetails = ({ country }) => {
    return (
      <>
        <h1> {country.name.official} </h1>
        <p> Capital: {country.capital} </p>
        <p> Area: {country.area} </p>
        <img src={country.flags.png} alt="Flag"></img>
        <h3> Languages </h3>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}> {lang} </li>
          ))}
        </ul>
        <WeatherWidget country={country}/>
      </>
    );
}

