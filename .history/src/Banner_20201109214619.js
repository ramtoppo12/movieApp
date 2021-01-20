import React, { useState,useEffect } from 'react';
import axios from "./axios";

export default function Banner({fetchUrl}) {
    const [movies,setMovies] = useState([]);


    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;{}
        }
        fetchData();
    }, [fetchUrl])

    return (
        <header>

        </header>
    )
}
