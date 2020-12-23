export default function Header() {
    return (
        <header>
            <p className='header-name'></p>
            <div className='header-links-div'>
                <a href='/' className='header-link'>Home</a>
                <a href='/about' className='header-link'>About Us</a>
                <a href='/covid-19' className='header-link'>Covid-19</a>
                <a href='/faq' className='header-link'>FAQ</a>
                <a href='/terms-conditions' className='header-link'>Terms and Conditions</a>
                <a href='/contact' className='header-link'>Contact</a>
            </div>
        </header>
    )
}