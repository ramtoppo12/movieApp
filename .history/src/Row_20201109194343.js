import React, { useState } from 'react'

export default function Row({title}) {
    const [movies,setMovies]=useState([]);

    return (
        <div className="row">
            <h1>{title}</h1>
        </div>
    )
}
