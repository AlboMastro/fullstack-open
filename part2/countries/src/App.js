import {useState, useEffect} from 'react'

import countryServ from './services/CountriesServices';

import { CountryList } from './components/CountryList'
function App() {
  const [countries, setNewCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    countryServ
    .getCountries()
    .then(countries => {
      setNewCountries(countries)
    });
  }, []) 

  const handleSearch = (event) => {
    event.preventDefault()
    
    const searchCountry = (search) => countries.filter((f) => f.name.common.includes(search));
    setSearchResult(searchCountry(event.target.value))
  }

  
  return (
  <>
   <form> 
     Search for a country: <input onChange={handleSearch}></input>
   </form>
   <CountryList searchResult={searchResult} />
  </>
  );
}

export default App;
