import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Neighbour from "../Neighbour";

export default function Country({ COUNTRIES }) {
  const [country, setCountry] = useState({});

  const params = useParams();

  async function getCountry() {
    const API = `https://restcountries.com/v3.1/name/${params.name}`;
    const res = await axios.get(API);
    setCountry(res.data[0]);
  }

  useEffect(() => {
    getCountry();
  }, []);

  function getLanguages() {
    const languages = [];
    for (const value of Object.values(country.languages)) {
      languages.push(value);
    }
    return languages.join(", ");
  }

  function getCurrencies() {
    const currencies = [];
    for (const value of Object.values(country.currencies)) {
      currencies.push(value.name);
    }
    return currencies.join(", ");
  }

  function getNeighbours() {
    return country.borders.map((border) => {
      return COUNTRIES.filter((country) => country.cca3 === border)[0];
    });
  }

  return (
    country.region && (
      <main className="country">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="country__flag"
        />
        <h1 className="country__name">{country.name.common}</h1>
        <p className="country__official-name">{country.name.official}</p>
        <div className="country__key-facts">
          <div className="key-facts__fact">
            <span>Population</span>
            <span>{country.population}</span>
          </div>
          <div className="key-facts__fact">
            <span>Area (km³)</span>
            <span>{country.area}</span>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Capital</th>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <th>Subregion</th>
                <td>{country.subregion}</td>
              </tr>
              <tr>
                <th>Language</th>
                <td>{getLanguages()}</td>
              </tr>
              <tr>
                <th>Currencies</th>
                <td>{getCurrencies()}</td>
              </tr>
              <tr>
                <th>Continents</th>
                <td>{country.continents}</td>
              </tr>
            </tbody>
          </table>
          {country.borders && (
            <>
              <h2>Neighbouring Countries</h2>
              <div className="flex">
                {getNeighbours().map((country, index) => (
                  <Neighbour
                    key={index + 1}
                    alt={country.flags.alt}
                    img={country.flags.svg}
                    name={country.name.common}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    )
  );
}
