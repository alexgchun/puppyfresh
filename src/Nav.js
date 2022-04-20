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
                <a href="https://www.youtube.com" target="_blank" >Products</a>
                <a href="https://www.youtube.com" target="_blank" >Brands</a>
                <a href="https://www.youtube.com" target="_blank" className='red-nav' >Services</a>
                <a href="https://www.youtube.com" target="_blank" >Help</a>
            </div>
        </div>
    )
}