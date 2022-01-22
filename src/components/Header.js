import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import Baffle from "baffle-react";

const Header = () => {

const text = "ZAchary's WEBSITE PORTFOLIO";

    return (
        <div id='home' className='header-wrapper'>
            <div className='main-info'>
                {text.split("\n").map((s) => (
                    <>
                    <Baffle
                        speed={75}
                        characters="░▒▒ ▒░░░░ ▓▓▒▒█ ▓▒▒ █▓<▒█ ▒█>░ █>▓ ░>▓░ █░█▓"
                        exclude={[" ", "!"]}
                        obfuscate={false}
                        update={true}
                        revealDuration={1500}
                        revealDelay={0}
                    >
                        {s}
                    </Baffle>
                    <br />
                </>
            ))}
            <div className='typed-text'>
                <Typed 
                    className='typed-text'
                    strings={['An ever evolving','Work In Progress', 'Using some technologies like:', 'React, HTML, Python, CSS, Javascript, and more...',]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
                <Link to='contacts' offset={-110} className="animate__animated animate__fadeInBottomRight" href="#">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;
