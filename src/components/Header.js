import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id='home' className='header-wrapper'>
            <div className='main-info'>
                <h1>ZAch Nault's website portfolio</h1>
                <Typed 
                    className='typed-text'
                    strings={['Web Design', 'Web Development', 'Python Programming']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to='contacts' offset={-110} className="btn-main-offer" href="#">Contact Me</Link>
                {/* <a href='#' className='btn-main-offer'>Contact Me</a> */}
            </div>
        </div>
    )
}

export default Header;
