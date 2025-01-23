import axios from "axios";
import { useState, useEffect } from "react";

const InfoOneCountry = ({ country }) => {
  if (!country) {
    return null;
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {Object.entries(country.languages).map(([code, language]) => (
          <li key={code}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width="150"
      />
      <h2>Weather in {country.name.common}</h2>
    </div>
  );
};

const InfoCountryCondition = ({ infoCountry, onSelectCountry }) => {
  if (!infoCountry) {
    return null;
  }

  if (infoCountry.length === 1) {
    const country = infoCountry[0];
    return <InfoOneCountry country={country} />;
  } else if (infoCountry.length < 10 && infoCountry.length > 1) {
    return (
      <ul>
        {infoCountry.map((country) => (
          <li key={country.name.common}>
            {country.name.common}
            <button onClick={() => onSelectCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

const App = () => {
  const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";

  const [country, setCountry] = useState("");
  const [infoCountry, setInfoCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleChangeInput = (event) => setCountry(event.target.value);

  useEffect(() => {
    if (!country) {
      setInfoCountry(null);
      return;
    }

    axios.get(baseURL).then((response) => {
      const filteredCountries = response.data.filter((item) =>
        item.name.common.toLowerCase().includes(country.toLowerCase())
      );
      setInfoCountry(filteredCountries);
    });
  }, [country]);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      find countries
      <input
        value={country}
        type="text"
        placeholder="find country"
        onChange={handleChangeInput}
      />
      <InfoCountryCondition
        infoCountry={infoCountry}
        onSelectCountry={handleSelectCountry}
      />
      {selectedCountry && <InfoOneCountry country={selectedCountry} />}
    </div>
  );
};

export default App;
