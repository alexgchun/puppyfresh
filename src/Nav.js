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
                <a href="" >Products</a>
                <a href="" >Brands</a>
                <a href="" className='red-nav' >Services</a>
                <a href="" >Help</a>
            </div>
        </div>
    )
}