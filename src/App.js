// packages
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Home from "./components/Home";
import RandomQuoteMachine from "./components/random_q_machine/RandomQuoteMachine";
// style
import "./styles/App.scss";

function App() {
  return (
    // <div>
    //   {/* <h1>test</h1> */}
    //   <RandomQuoteMachine />
    // </div>
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/random-quote-machine" element={<RandomQuoteMachine />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App