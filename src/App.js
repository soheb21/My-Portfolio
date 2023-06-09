import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About  />
      <Services />
      <Prices />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
