import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>
        hey i am making an movie App.
        <Row title="Trending" fetchUrl={requests.fetchNetfixOriginals}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      </h1>
    </div>
  );
}

export default App;