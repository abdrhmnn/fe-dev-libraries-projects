// packages
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Home from "./components/Home";
import MarkdownPreviewer from "./components/markdown_previewer/MarkdownPreviewer";
import RandomQuoteMachine from "./components/random_q_machine/RandomQuoteMachine";
// style
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/random-quote-machine" element={<RandomQuoteMachine />} />
          <Route exact path="/markdown-previewer" element={<MarkdownPreviewer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App