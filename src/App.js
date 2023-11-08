import React from "react";
import Cursor from "./components/Cursor/Cursor";
import Name from "./sections/Name/Name";
import AboutMe from "./sections/AboutMe/AboutMe";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./App.scss";

function App() {

  return (
    <div className="main">
      <Cursor />
      <Name />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
