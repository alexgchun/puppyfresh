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
                <a >Products</a>
                <a >Brands</a>
                <a className='red-nav' >Services</a>
                <a >Help</a>
            </div>
        </div>
    )
}