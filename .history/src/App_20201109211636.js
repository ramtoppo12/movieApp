import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>
        hey i am making an movie App.
        <Row title="Netflix originals" fetchUrl={requests.fetchNetfixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>


      </h1>
    </div>
  );
}

export default App;
