import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Components
import Header from "./components/Header";

// Styles
import "./App.css";
import "./utilities.css";
import "./components/button.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        // console.log(response.data.offers);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        // console.log(error.response);contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  const [offers, setOffers] = useState(data);

  return (
    <>
      {/* <p>{data.offers[0].product_name}</p> MARCHE */}

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home offers={data.offers} />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
