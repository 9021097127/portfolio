import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar name="kiran,s" />
      <Home />
      <About />
      <Contact />
    </>
  );
};

export default App;
