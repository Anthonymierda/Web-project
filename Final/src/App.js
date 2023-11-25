// Jdid
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Pages to include:
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Navbar from "./Components/navbar/Navbar";
import Container from "./Components/moduls/Container";
import Services from "./pages/service/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cards" element={<Products />} />
          <Route path="/sign-up" element={<Container />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

