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

    function truncate(str,n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner"
        style={{backgroundSize:"cover",
    backgroundPosition:"center center",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`

}}>
            <div className="banner__contents">
            {/* title */}
    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
    <div className="banner__buttons">
    <button className="banner__button">
    Play
    </button>
    <button className="banner__button">
    My List
    </button>

    <h1 className="banner__description">
        {truncate(movie?.overview,150)}
    </h1>

    </div>
            </div>
<div className="banner__fadeBottom"/>
        </header>
    )
}
