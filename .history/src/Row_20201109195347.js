import React, { useState,useEffect } from 'react'

export default function Row({title,fetchUrl}) {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        //
    },[])
    return (
        <div className="row">
            <h1>{title}</h1>
        </div>
    )
}
