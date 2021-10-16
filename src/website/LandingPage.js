import React from "react";
import NavBar from '../components/NavBar';
import IndexImg from '../components/IndexImg';
import IndexInfo from '../components/IndexInfo';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="App">
      <NavBar />
      <IndexImg />
      <IndexInfo />
      <Footer />
    </div>
  );
}

export default LandingPage;
