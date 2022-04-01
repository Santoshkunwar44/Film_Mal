import React, { useState, useEffect } from 'react'
import "./Row.css"
import instance from "../axios"
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {

    const { title, fetchUrl, shouldPlay, setShouldPlay, rowNo } = props;
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    // A snippet of code which runs based on a specific condition 


    console.log(trailerUrl, shouldPlay)

    useEffect(() => {

        async function fetchData() {
            const { data } = await instance.get(fetchUrl);
            setMovies(data.results)
        }
        fetchData()

        // [] runs once when the Row loads then dont run again
        // [ movies] run every time when movie variable changes 

    }, [fetchUrl]);


    const handleTrailerClick = (movie) => {



        if (!shouldPlay) {
            setTrailerUrl("")

            movieTrailer(movie?.name || movie?.title)
                .then((url) => {
                    console.log(url)
                    const serchParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(serchParams.get("v"))
                })
                .catch((err) => {
                    console.log(err)
                })

            setShouldPlay(true)
        } else {
            setShouldPlay(false)
            setTrailerUrl()

        }
    }


    const opts = {
        height: "400px",
        width: "100%",
        playerVars: {
            autoplay: 1
        }

    }



    return (
        <div className='row'>
            <h5>{title}</h5>

            <div className='row_posters'>

                {movies.map((movieItem) => (

                    <img onClick={() => handleTrailerClick(movieItem)} key={movieItem.id} className={` row_poster ${rowNo == 1 && "row_poster_large"}`}
                        src={rowNo == 1 ? `${base_url}${movieItem.poster_path}` : ` ${base_url}${movieItem?.backdrop_path}`} alt={movieItem.name} />

                ))}
            </div>
            {(shouldPlay && trailerUrl) && < YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row