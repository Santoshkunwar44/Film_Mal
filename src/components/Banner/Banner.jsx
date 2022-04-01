import React, { useEffect, useState } from 'react'
import instance from '../../axios'
import request from '../../request'
import "./banner.css"

export const Banner = () => {

    const [bannerMovie, setBannerMovie] = useState([])

    useEffect(() => {


        const fetchBannerData = async () => {

            const { data } = await instance.get(request[0].endPoint)
            setBannerMovie(data.results[Math.floor(Math.random() * data.results?.length - 1)])

        }

        fetchBannerData()

    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path})`
            , backgroundPosition: "center center"
        }}>

            <div className="banner_content">
                <h1 className='banner_title'>{bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}</h1>

                <div className="banner_buttons">
                    <button className="banner_button">PLAY</button>
                    <button className="banner_button"> MY LIST</button>

                </div>

                <h3 className='banner_overview'>{truncate(bannerMovie?.overview, 150)}</h3>


            </div>
            <div className="banner_fadeBottom"></div>
        </div>
    )
}
// Math.floor(Math.random() * data.results.length - 1)