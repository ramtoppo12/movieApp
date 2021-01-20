import React, { useState,useEffect } from 'react';
import axios from "./axios";
const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({title,fetchUrl}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        //if we leave the bracket Run once
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    console.log(movies)
    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
            {movies.map(movie =>(
                <img src={base_url+movie.poster_path}/>
            ))}
            </div>
        </div>
    )
}
