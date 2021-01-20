import React, { useState,useEffect } from 'react';
import axios from "./axios";
import requests from './request';

export default function Banner({fetchUrl}) {
    const [movies,setMovies] = useState([]);


    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(requests.fetchNetfixOriginals);
            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
        }
        fetchData();
    }, [])
    console.log(movies);
    return (
        <header>

        </header>
    )
}
