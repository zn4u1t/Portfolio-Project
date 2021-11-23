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
                    strings={['proficient in:','Basic Web Design (html, css and js)', 'React.js', 'Python Programming']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={false} to='contacts' offset={-110} className="btn-main-offer-head" href="#">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;
