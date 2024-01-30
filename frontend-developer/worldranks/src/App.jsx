import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [COUNTRIES, setCOUNTRIES] = useState([]);

  async function getCountries() {
    const API = "https://restcountries.com/v3.1/all";
    const res = await axios.get(API);
    setCOUNTRIES(res.data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home COUNTRIES={COUNTRIES} />}></Route>
        <Route
          path={`/country/:name`}
          element={<Country COUNTRIES={COUNTRIES} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
