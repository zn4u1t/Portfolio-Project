import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

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
                <a className="navbar-brand" href="/Portfolio-Project"><img className='logo' src={logo} alt='logo...'/></a>
                <button id="toggler" onClick={handleState}  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='home' className="nav-link" onClick={handleClick} >Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='about' offset={-80} className="nav-link" onClick={handleClick} >About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='projects' offset={-90} className="nav-link" onClick={handleClick} >Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='experience' offset={-100} className="nav-link" onClick={handleClick} >Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='services' offset={-90} className="nav-link" onClick={handleClick} >My Pages</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='contacts' offset={-110} className="nav-link" onClick={handleClick} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
