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
    backgroundImage:`url("https://image.tdbm.org/t/p/otiginal/${movies?.backdrop_path})`}}
        >
            <div className="banner__contents">
            {/* title */}
            </div>

        </header>
    )
}
