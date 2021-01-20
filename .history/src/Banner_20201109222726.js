import React, { useState,useEffect } from 'react';
import axios from "./axios";
import requests from './request';
import "./banner.css"

export default function Banner({fetchUrl}) {
    const [movie,setMovie] = useState([]);


    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(requests.fetchNetfixOriginals);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
        }
        fetchData();
    }, [])
    console.log(movie); 
    return (
        <header className="banner"
        style={{backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`

}}>
            <div className="banner__contents">
            {/* title */}
    <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
    <div className="banner__buttons">
    <button className="banner__button">
    Play
    </button>
    <button className="banner__button">
    My List
    </button>

    <h1>{movie?.overview}
    </h1>

    </div>
            </div>

        </header>
    )
}
