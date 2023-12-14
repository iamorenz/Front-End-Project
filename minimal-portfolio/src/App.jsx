/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
