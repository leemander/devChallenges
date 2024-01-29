import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let COUNTRIES = [];
  async function getCountries() {
    const API = "https://restcountries.com/v3.1/all";
    const res = await axios.get(API);
    countries = res.data;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} countries={COUNTRIES}></Route>
        <Route
          path={`/country/:name`}
          element={<Country />}
          countries={COUNTRIES}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
