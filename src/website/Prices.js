import React from "react";
import NavBar from '../components/NavBar';
import PricesImg from '../components/PricesImg';
import Pricelist from '../components/Pricelist';
import Footer from '../components/Footer';

function Prices() {
  return (
    <div className="App">
    <NavBar />
    <PricesImg />
    <Pricelist />    
    <Footer />
    </div>
  );
}

export default Prices;
