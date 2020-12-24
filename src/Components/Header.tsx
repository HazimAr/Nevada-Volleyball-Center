export function checkHeader() {
    const header: any = document.getElementById('drop-header')
    if (window.scrollY > 100) {
        header.style.animation = 'headerComeIn 1s forwards'
        header.style.display = 'flex'
    }
    else {
        header.style.animation = 'headerComeOut 1s forwards' // TODO fade out?
    }
}
let isActive = false;
function invertDropDownMenu() {
    const element: any = document.getElementById('dropdown')
    if (isActive) {
        element.style.animation = 'dropExpand 1s forwards'
        isActive = false
    }
    else {
        element.style.animation = 'dropHide 1s forwards'
        isActive = true
    }
}
function HeaderContent(props: { id?: string }) {
    return (
        <header id={props.id}>
            <div className='header-links-div'>
                <a href='/' className='header-link'>Home</a>
                <a href='/about' className='header-link'>About Us</a>
                <a href='/covid-19' className='header-link'>Covid-19</a>
                <a href='/faq' className='header-link'>FAQ</a>
                <a href='/terms-conditions' className='header-link'>Terms and Conditions</a>
                <a href='/contact' className='header-link'>Contact</a>
            </div>
            <svg onClick={invertDropDownMenu} className='header-menu-img' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
        </header>

    )
}

export default function Headers() {
    return (
        <div>
            <HeaderContent />
            <HeaderContent id='drop-header' />
        </div>
    )
}
