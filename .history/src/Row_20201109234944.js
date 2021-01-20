import React, { useState,useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from "./axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original/";


export default function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");


    useEffect(()=>{
        //if we leave the bracket Run once
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])

    const opt = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    const handleClick = () =>{
        if(trailerUrl){
            setTrailerUrl('';)
        }else{
            movieTrailer(movie?.name || "").then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
            }).catch((err)=> console.log(err))
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
            {movies.map(movie =>(
                <img key={movie.id} 
                onClick={()=>handleClick(movies)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${ isLargeRow ? movie.poster_path :movie.backdrop_path}`}/>
            ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opt}/>}
        </div>
    )
}
