import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MyInfo from "./assets/MyInfo";
import Header from "./assets/Header";
import Titem from "./assets/Todo.js";

function App() {
  //   const date = new Date();
  //   const hours = date.getHours();
  //   var timeofDay = "Mudit";

  // if (hours < 12) {
  //   timeofDay = "morning";
  // } else if (hours > 12 && hours < 17) {
  //   timeofDay = "afternoon";
  // } else timeofDay = "night";

  return (
    <div>
      <h1>Project Chahiye CV me, Paisa chahiye Jeb me</h1>
      <Titem />
      <Titem />
      <Titem />
      <Titem />
    </div>
  );
}

export default App;
