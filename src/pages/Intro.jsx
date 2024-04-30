import { useState, useEffect } from 'react'
import '../App.css'
import Logo from "../assets/logo.png"
// import BG from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'


function Intro() {

    const logSomething = ()=>{
        console.log("Hello world")
    }
    return (
        <div className='homebg'>
            <img src={Logo} alt="jobGeniusLogo" className='logo' />
            <Link to="/select" className='button'>Get Stared</Link>
        </div>
    )
}

export default Intro
