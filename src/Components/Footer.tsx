import facebook from '../Images/facebook.svg'
import insta from '../Images/instagram.svg'
import youtube from '../Images/youtube.svg'
import logo from '../Images/logo.png'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='footer-section'>
                    <div className='footer-logo-section'>
                        <img src={logo} alt='' className='footer-logo'/>
                        <p className='footer-tagline'> this is your tagline  </p>
                    </div>
                </div>
                <div className='footer-section'>
                    <div className='footer-about'>
                        <p className='footer-title'>About Us</p>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do eiusmod tempor <br />
                            incididunt ut labore et dolore magna <br />
                    </div>
                    <div className='footer-contact'>
                        <p className='footer-title'>
                            Contact Us
                        </p>
                        NevadaVolleyBallCenter@gmail.com<br />
                        (702) 502-9462<br />
                        3778 W. Cheyenne Ave STE 120 <br />
                        N. Las Vegas, NV 89032<br />
                    </div>
                </div>
                <div className='footer-section'>
                    <p className='footer-title'>Information</p>
                    <p>
                        About Us<br />
                        More<br />
                        Testimonials <br />
                        Events<br />
                    </p>
                </div>
                <div className='footer-section'>
                    <p className='footer-title'>Helpful Links</p>
                    <p>
                        Services<br />
                        More<br />
                        Testimonials <br />
                        Events<br />
                    </p>
                </div>
            </div>

            <div className='footer-bottom'>
                <hr />
                <div className='footer-socials-div'>
                    <a href='https://www.facebook.com/SparksVBCLV' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={facebook} alt='' className='footer-socials' /></a>
                    <a href='https://www.instagram.com/sparks_vbc_lv/' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={insta} alt='' className='footer-socials' /></a>
                    <a href='https://www.youtube.com/channel/UCrUowRgcYRZif4HXd9RgO4A' target='_blank' rel='noreferrer noopener' className='footer-img-link'><img src={youtube} alt='' className='footer-socials' /></a>
                </div>
                <p>© 2020 Nevada VolleyBall Center All Rights Reserved</p>
            </div>
        </footer>
    )
}