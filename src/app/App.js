import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Question from "./Question";

function App() {
  return (
    <Router style={{ width: "100%" }}>
      <Home path="/" />
      <Question path="/:category/:value/" />
    </Router>
  );
}

export default App;
