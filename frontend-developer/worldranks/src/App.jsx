import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TableRow from "./TableRow";

function App() {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const API = "https://restcountries.com/v3.1/all";
    const res = await axios.get(API);
    setCountries(res.data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <main className="app">
        <form className="app__form">
          <div className="justify-between">
            <span>Found {countries.length} countries</span>
            <input
              type="text"
              className="form__search"
              placeholder="Search by name, region, and subregion"
            />
          </div>
          <label htmlFor="sort">
            Sort by
            <select className="form__sort" id="sort">
              <option value="name">Name</option>
              <option value="population">Population</option>
              <option value="area">Area</option>
            </select>
          </label>
          <fieldset className="form__region">
            <legend>Region</legend>
            <label htmlFor="americas">
              Americas
              <input type="checkbox" id="americas" />
            </label>
            <label htmlFor="antarctic">
              Antarctic
              <input type="checkbox" id="antarctic" />
            </label>
            <label htmlFor="africa">
              Africa
              <input type="checkbox" id="africa" />
            </label>
            <label htmlFor="asia">
              Asia
              <input type="checkbox" id="asia" />
            </label>
            <label htmlFor="europe">
              Europe
              <input type="checkbox" id="europe" />
            </label>
            <label htmlFor="oceania">
              Oceania
              <input type="checkbox" id="oceania" />
            </label>
          </fieldset>
          <fieldset className="form__status">
            <legend>Status</legend>
            <label htmlFor="un">
              Member of the United Nations
              <input type="checkbox" id="un" />
            </label>
            <label htmlFor="independent">
              Independent
              <input type="checkbox" id="independent" />
            </label>
          </fieldset>
        </form>
        <table>
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area(km³)</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => {
              return (
                <TableRow
                  alt={country.flags.alt}
                  area={country.area.toLocaleString()}
                  img={country.flags.svg}
                  key={index + 1}
                  name={country.name.common}
                  pop={country.population.toLocaleString()}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
