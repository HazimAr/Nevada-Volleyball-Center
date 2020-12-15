import React from 'react'

export default function Header() {
    return (
        <div>
            <p className='header-name'></p>
            <div className='header-links-div'>
                <a href='/'  className='header-link'>Home</a>
                <a href='/about' className='header-link'>About Us</a>
                <a href='/covid-19' className='header-link' id='header-register'>Covid-19</a>
                <a href='/contact'  className='header-link'>Contact</a>
            </div>
        </div>
    )
}