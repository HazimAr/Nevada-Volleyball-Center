import React from 'react'
import facebook from '../Images/facebook.svg'
import insta from '../Images/instagram.svg'
import youtube from '../Images/youtube.svg'
import logo from '../Images/youtube.svg'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='footer-section'>
                    <div className='footer-logo-div'>
                        <img alt='' src={logo} className='footer-logo' />
                        <p className='footer-tagline'> this is your tagline retard </p>
                    </div>
                    <p className='footer-contact'>
                        <p className='footer-contact-title'>

                        </p>
                        NevadaVolleyBallCenter@gmail.com<br />
                        (702) 502-9462<br />
                        3778 W. Cheyenne Ave STE 120 <br /> 
                        N. Las Vegas, NV 89032<br />
                    </p>
                </div>
                <div className='footer-section'>
                        <p className='section-title'>Contact Us</p>
                        <p className='footer-text'>
                            NevadaVolleyBallCenter@gmail.com<br />
                            (702) 502-9462<br />
                            3778 W. Cheyenne Ave STE 120 <br /> 
                            N. Las Vegas, NV 89032<br />
                        </p>
                </div>
                <div className='footer-section'>
                        <p className='section-title'>Contact Us</p>
                        <p className='footer-text'>
                            NevadaVolleyBallCenter@gmail.com<br />
                            (702) 502-9462<br />
                            3778 W. Cheyenne Ave STE 120 <br /> 
                            N. Las Vegas, NV 89032<br />
                        </p>
                </div>
            
                <div className='footer-section'>
                    <p className='section-title'>Contact Us</p>
                    <p className='footer-text'>
                        NevadaVolleyBallCenter@gmail.com<br />
                        (702) 502-9462<br />
                        3778 W. Cheyenne Ave STE 120 <br /> 
                        N. Las Vegas, NV 89032<br />
                    </p>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='footer-socials-div'>
                    <a href='https://www.facebook.com/SparksVBCLV' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={facebook} alt='' className='footer-socials' /></a>
                    <a href='https://www.instagram.com/sparks_vbc_lv/' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={insta} alt='' className='footer-socials' /></a>
                    <a href='https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={youtube} alt='' className='footer-socials' /></a>
                </div>
            </div>
            
            <p className='footer-copyright-text'>© 2020 <span className='footer-copyright-name'>Nevada VolleyBall Center All Right Reserved</span></p>
        </footer>
    )
}