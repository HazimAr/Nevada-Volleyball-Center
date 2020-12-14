import React from 'react'

export default function Header() {
    return (
        <div>
            <p className='header-name'></p>,
            <div className='header-links-div'>
                <a href='/'  className='header-link'>Home</a>
                <a href='/about' className='header-link'>About Us</a>
                <a href='/register' className='header-link' id='header-register'>Register</a>
                <a href='/faq'  className='header-link'>Contact</a>
            </div>
        </div>
    )
}