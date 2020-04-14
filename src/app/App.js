import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Game from "./Game";
import Question from "./Question";

function App() {
  return (
    <Router style={{ width: "100%" }}>
      <Home path="/" />
      <Game path="/game/" />
      <Question path="/game/:category/:value/" />
    </Router>
  );
}

export default App;
