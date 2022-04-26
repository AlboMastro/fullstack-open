import { SmallCountry } from "./SmallCountry";
import { CountryDetails } from "./CountryDetails";

export const CountryList = ({ searchResult }) => {
    if (searchResult.length > 10) {
      return <p> Too many matches, narrow the scope of your search </p>;
    } else if (searchResult.length === 1) {
        return (
          <CountryDetails country={searchResult[0]} />
        );
    } else if (searchResult.length <= 10 || searchResult.length > 1) {
      return (
        <ul>
          {searchResult.map((country) => (
            <SmallCountry key={country.name.official} country={country} />
          ))}
        </ul>
      ) 
    } 
  };