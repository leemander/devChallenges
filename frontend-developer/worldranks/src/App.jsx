import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main className="app">
        <form className="app__form">
          <div className="justify-between">
            <span>Found 234 countries</span>
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
      </main>
    </>
  );
}

export default App;
