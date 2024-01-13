import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./Routes/BaseRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <BaseRouter />
    </Router>
  );
}

export default App;
