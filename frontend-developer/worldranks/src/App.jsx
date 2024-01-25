import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import TableRow from "./TableRow";

function App() {
  const [COUNTRIES, setCOUNTRIES] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("name");
  const [formData, setFormData] = useState({
    americas: true,
    antarctic: true,
    africa: true,
    asia: true,
    europe: true,
    oceania: true,
    un: false,
    independent: false,
  });

  async function getCountries() {
    const API = "https://restcountries.com/v3.1/all";
    const res = await axios.get(API);
    setFilteredCountries(res.data);
    setCOUNTRIES(res.data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  function updateFormData(e) {
    e.target.type !== "checkbox"
      ? setFormData({ ...formData, [e.target.name]: e.target.value })
      : setFormData({ ...formData, [e.target.name]: e.target.checked });
  }

  // function sortCountries() {
  //   if (sort === "name") {
  //     return countries.sort((a, b) =>
  //       a.name.common.localeCompare(b.name.common)
  //     );
  //   } else if (sort === "population") {
  //     return countries.sort((a, b) => a.population - b.population);
  //   } else if (sort === "area") {
  //     return countries.sort((a, b) => a.area - b.area);
  //   }
  // }

  // useEffect(() => {
  //   console.log(sort);
  //   setCountries(sortCountries);
  // }, [sort]);

  function searchCountries() {
    setFilteredCountries(
      COUNTRIES.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  useEffect(searchCountries, [searchTerm]);

  function filterCountries() {}

  return (
    <>
      <main className="app">
        <form className="app__form">
          <div className="justify-between">
            <span>Found {filteredCountries.length} countries</span>
            <input
              className="form__search"
              name="search"
              placeholder="Search by name, region, and subregion"
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <label htmlFor="sort">
            Sort by
            <select
              className="form__sort"
              id="sort"
              name="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="name">Name</option>
              <option value="population">Population</option>
              <option value="area">Area</option>
            </select>
          </label>
          <fieldset className="form__region">
            <legend>Region</legend>
            <label htmlFor="americas">
              Americas
              <input
                checked={formData.americas}
                id="americas"
                name="americas"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="antarctic">
              Antarctic
              <input
                checked={formData.antarctic}
                id="antarctic"
                name="antarctic"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="africa">
              Africa
              <input
                checked={formData.africa}
                id="africa"
                name="africa"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="asia">
              Asia
              <input
                checked={formData.asia}
                id="asia"
                name="asia"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="europe">
              Europe
              <input
                checked={formData.europe}
                id="europe"
                name="europe"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="oceania">
              Oceania
              <input
                checked={formData.oceania}
                id="oceania"
                name="oceania"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
          </fieldset>
          <fieldset className="form__status">
            <legend>Status</legend>
            <label htmlFor="un">
              Member of the United Nations
              <input
                checked={formData.un}
                id="un"
                name="un"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
            </label>
            <label htmlFor="independent">
              Independent
              <input
                checked={formData.independent}
                id="independent"
                name="independent"
                type="checkbox"
                onChange={(e) => updateFormData(e)}
              />
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
            {filteredCountries.map((country, index) => {
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
