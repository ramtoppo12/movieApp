import './App.css';
import React from "react";
import Row from "./Row";

function App() {
  return (
    <div className="App">
      <h1>
        hey i am making an movie App.
        <Row title="Trending"/>
        <Row title="Top Rated"/>
      </h1>
    </div>
  );
}

export default App;
