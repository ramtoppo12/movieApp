import React, { useState,useEffect } from 'react';
import axios from "./axios"

export default function Row({title,fetchUrl}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        //if we leave the bracket Run once

    },[])
    return (
        <div className="row">
            <h1>{title}</h1>
        </div>
    )
}
