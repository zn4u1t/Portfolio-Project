import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='d-flex'>
                            <p>City Candia Old Manchester Rd NH</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:555-555-5555'>(603)-289-0466</a>
                        </div>
                        <div className='d-flex'>
                            <p>Znault@comcast.net</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-2 col-sm-6'>
                        <div className='row'>
                            <div className='col'>
                                <Link smooth={true} to='home' offset={-110} className="footer-nav" href="#">Home</Link>
                                <br />
                                <Link smooth={true} to='about' offset={-110} className="footer-nav" href="#">About Me</Link>
                                <br />
                                <Link smooth={true} to='services' offset={-110} className="footer-nav" href="#">My Pages</Link>
                            </div>
                            <div className='col'>
                                <Link smooth={true} to='experience' offset={-110} className="footer-nav" href="#">Experience</Link>
                                <br />
                                <Link smooth={true} to='portfolio' offset={-110} className="footer-nav" href="#">Portfolio</Link>
                                <br />
                                <Link smooth={true} to='contacts' offset={-110} className="footer-nav" href="#">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <a href='https://www.facebook.com' target='_blank'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faFacebookF} size='2x'/></div></a>
                            <a href='https://github.com/zn4u1t' target='_blank'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faGithub} size='2x'/></div></a>
                        </div>
                        <p className='pt-3 text-center'>
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Zach Nault | All Rights Reserved
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
