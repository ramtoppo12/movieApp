import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./request";
import Navbar from './Navbar';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner />
        <Row isLargeRow={true} title="Netflix originals" fetchUrl={requests.fetchNetfixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Documenteries Movies" fetchUrl={requests.fetchDocumentaries}/>
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomenticMovies}/>


      
    </div>
  );
}

export default App;
