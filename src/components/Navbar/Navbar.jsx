import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {


    const [handleShow, setHandleShow] = useState()

    useEffect(() => {
        console.log(window.scrollY)
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setHandleShow(true)
            } else setHandleShow(false)
        })
        return () => {
            window.removeEventListener("scroll", null)
        }
    }, [handleShow])

    return (
        <div className={`nav ${handleShow && "nav_black"}`}>
            <img className='nav_logo' src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/03/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w-1024x581.png" alt="Netflix logo" />
            <img className='nav_avatar' src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/233563817_1263130874140212_5334142726289597545_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-5&_nc_sid=7206a8&_nc_ohc=vsTGP2xVJXIAX91ATZO&_nc_ht=scontent.fbwa1-1.fna&oh=00_AT9Uw5iBzfXdpbogKgHz07ibHe8zXVLRzPApkb9ksG_2qw&oe=624CDBCA" alt="profileLogo" />
        </div>
    )
}

export default Navbar