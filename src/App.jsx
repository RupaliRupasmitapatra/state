/* eslint-disable no-unused-vars */
import React from "react";
import { BroeswrRouter as Router, Route } from "react-router-dom";
import List from "./components/List";
import Result from "./components/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={List} />
        <Route path="result" component={Result} />
      </div>
    </Router>
  );
}
export default App;
