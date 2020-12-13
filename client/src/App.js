import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Home/>
      </Router>
      <p>text</p>
    </div>
  );
}

export default App;
