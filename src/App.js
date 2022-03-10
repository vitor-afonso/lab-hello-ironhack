// jshint esversion:8
import './App.css';
import React from "react";
import { Component1 } from "./Components/Component1";
import { Component2 } from "./Components/Component2";
import { Component3 } from "./Components/Component3";
import { Component4 } from "./Components/Component4";
import { Component5 } from "./Components/Component5";

const App = () => {
  return (
    <div className="App">
      <Component1 />

      <section id="down">

        <Component2 />

        <Component3 />

        <Component4 />

        <Component5 />

      </section>
      
    </div>
  );
};

export default App;
