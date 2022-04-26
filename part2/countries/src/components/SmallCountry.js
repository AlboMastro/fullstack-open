import { useState } from "react";
import { CountryDetails } from "./CountryDetails";

export const SmallCountry = ({ country, weather }) => {
    const [isShown, setShownState] = useState(false);

    return (
          <li key={country.name.official}>
            {country.name.common} <button onClick={() => setShownState(!isShown)}> Show </button>
            {isShown ? <CountryDetails country={country} weather={weather} /> : null}
          </li>
    );
}