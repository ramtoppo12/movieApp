import React, { useState,useEffect } from 'react';
import axios from "./axios";

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
    },[])
    return (
        <div className="row">
            <h1>{title}</h1>
        </div>
    )
}
