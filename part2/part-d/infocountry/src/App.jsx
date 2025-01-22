import axios from "axios"
import { useState, useEffect } from "react"

const InfoCountryCondition = ({infoCountry}) => {
  if (infoCountry.length >= 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (infoCountry.length > 10) {
    return (
      <ul>
        {infoCountry.map(country => (
          <li key={country.name.common}>
            {country.name.common}
          </li>
        ))}
      </ul>
    )
  } else if (infoCountry.length === 1) {
    const country = infoCountry[0]
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>languages:</p>
        <ul>
          {Object.entries(country.languages).map(([code, language]) => (
            <li key={code}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />
      </div>
    )
  }
  return null
}

const CountryInfo = ({infoCountry}) => {
  if (!infoCountry) {
    return null
  }

  return (
    <InfoCountryCondition infoCountry={infoCountry}/>
  )
}

const App = () => {
  const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all"

  const [country, setCountry] = useState("")
  const [infoCountry, setInfoCountry] = useState(null)

  const handleChangeInput = (event) => setCountry(event.target.value)

  useEffect(() => {
    if (!country) {
      setInfoCountry(null)
      return
    }

    axios
    .get(baseURL)
    .then(response => {
      const filteredCountries = response.data.filter(item => item.name.common.toLowerCase().startsWith(country.toLowerCase()))
      setInfoCountry(filteredCountries)
    })
  }, [country])

  return (
    <div>
      find countries
      <input value={country} type="text" placeholder="find country" onChange={handleChangeInput} />
      <CountryInfo infoCountry={infoCountry} />
    </div>
  )
}

export default App
