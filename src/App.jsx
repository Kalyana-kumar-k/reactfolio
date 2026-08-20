import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Header />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
