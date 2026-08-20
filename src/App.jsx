import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
