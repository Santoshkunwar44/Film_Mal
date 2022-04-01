import React, { useState, useEffect } from 'react'
import "./Row.css"
import instance from "../axios"
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {

    const { title, fetchUrl, isLargeRow } = props;
    const [movies, setMovies] = useState([])

    // A snippet of code which runs based on a specific condition 

    useEffect(() => {

        async function fetchData() {
            const { data } = await instance.get(fetchUrl);
            setMovies(data.results)
        }
        fetchData()

        // [] runs once when the Row loads then dont run again
        // [ movies] run every time when movie variable changes 

    }, [fetchUrl]);




    return (
        <div className='row'>
            <h5>{title}</h5>

            <div className='row_posters'>
                {/* posters */}

                {movies.map((movieItem, index) => (

                    <img key={movieItem.id} className={` row_poster ${isLargeRow && "row_poster_large"}`}
                        src={isLargeRow ? `${base_url}${movieItem.poster_path}` : ` ${base_url}${movieItem?.backdrop_path}`} alt={movieItem.name} />

                ))}
            </div>
        </div>
    )
}

export default Row