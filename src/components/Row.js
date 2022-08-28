//4
import React, { useState, useEffect } from 'react'

import instance from '../instance'
import './Row.css'
const imageUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {  //title and fetchUrl is destructured

    const [movies, setMovies] = useState([])

    async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)

    }

    //when component is loading fetchData needs to be automaticalyy fireoxed so that useEffect is given to fetchData
    useEffect(() => {
        fetchData()
    }, [])
    console.log("our moviies", movies);
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map((movie) => (           //if islargerow is true classname is row__posterlarge
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${imageUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name} />   

                ))}
            </div>

        </div>
    )
}

export default Row