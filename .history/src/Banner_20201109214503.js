import React, { useState } from 'react'

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
    }, [])

    return (
        <header>

        </header>
    )
}
