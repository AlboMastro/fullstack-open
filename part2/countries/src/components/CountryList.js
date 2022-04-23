export const CountryList = ({ searchResult }) => {
    if (searchResult.length > 10) {
      return <p> Too many matches, narrow the scope of your search </p>;
    } else if (searchResult.length === 1) {
        return (
          <>
             {searchResult.map(country => ( 
                 <div key={country.name.common}>
                    <h1> {country.name.official} </h1>
                    <p> Capital: {country.capital} </p>
                    <p> Area: {country.area} </p>
                    <h3> Languages </h3>
                    <ul>
                        {(Object.values(country.languages)).map(lang => (
                          <li key={lang}> {lang} </li>
                        ))} 
                    </ul>
                    <img src={country.flags.png} alt="Flag"></img>
                 </div>
             ))} 
          </>
        );
    } else if (searchResult.length <= 10 || searchResult.length > 1) {
      return (
        <div>
          {searchResult.map((country) => (
            <p key={country.name.common}>
              {country.name.common} <button> Show </button>
            </p>
          ))}
        </div>
      ) 
    } 
  };