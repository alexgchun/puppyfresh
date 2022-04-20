import React from 'react'
import logo from './images/download.png'


export default function Nav() {

    return(
        <div className='nav'>
            <div className='logo'>
                <img src={logo} alt="" />
                <span>pupfresh</span>
            </div>
            <div className="links">
                <a href="https://www.youtube.com" >Products</a>
                <a href="https://www.youtube.com" >Brands</a>
                <a href="https://www.youtube.com" className='red-nav' >Services</a>
                <a href="https://www.youtube.com" >Help</a>
            </div>
        </div>
    )
}