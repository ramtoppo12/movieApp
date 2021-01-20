import React, { useState,useEffect } from 'react';
import axios from "./axios";
import requests from './request';

export default function Banner({fetchUrl}) {
    const [movies,setMovies] = useState([]);


    useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(requests.fetchNetfixOriginals);
        }
        fetchData();
    }, [fetchUrl])

    return (
        <header>

        </header>
    )
}
