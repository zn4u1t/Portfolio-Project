import React, { useState } from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const [open, setOpen] = useState(false);
 
    const handleClick = (e) => {
        e.preventDefault();
        const hideMenu = document.getElementById("navbarSupportedContent");
        hideMenu.classList.remove("show");
        const handleToggler = document.getElementById("toggler");
        handleToggler.classList.add("collapsed");
    }
 
    const handleState = (e) => {
        e.preventDefault();
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className='container'>   
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'/></a>
                <button id="toggler" onClick={handleState}  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth={true} to='home' className="nav-link" onClick={handleClick} >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='about' offset={-110} className="nav-link" onClick={handleClick} >About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='services' offset={-110} className="nav-link" onClick={handleClick} >My Pages</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='experience' offset={-110} className="nav-link" onClick={handleClick} >Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='portfolio' offset={-110} className="nav-link" onClick={handleClick} >Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='contacts' offset={-110} className="nav-link" onClick={handleClick} >Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar