import React from "react";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PracticesList from "../components/PracticesList";


function Practices() {
  return (
    <div className="App">
    <NavBar />
    <PracticesList />
    <Footer />
    </div>
  );
}

export default Practices;
