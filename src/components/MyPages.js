import React from 'react';
import './MyPages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const MyPages = () => {
    return (
        <div id='services' className='services'>
            <h1 className='py-5'>My Pages</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                                <a href='https://github.com/zn4u1t' target='_blank' rel='noreferrer'>
                                <div className='circle'><FontAwesomeIcon className='icon' icon={faGithub} size='4x'/></div></a>
                                <h3>Github</h3>
                                <p>Check out some of my repos</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                                <a href='https://www.linkedin.com/in/zach-nault-abbb2aa0/' target='_blank' rel='noreferrer'>
                                <div className='circle'><FontAwesomeIcon className='icon' icon={faLinkedin} size='4x'/></div></a>
                                <h3>Linkedin</h3>
                                <p></p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                                <a href='https://www.youtube.com/channel/UCefyNJcOfEYZbn_ISTIGMMQ' target='_blank' rel='noreferrer'>
                                <div className='circle'><FontAwesomeIcon className='icon' icon={faYoutube} size='4x'/></div></a>
                                <h3>Youtube</h3>
                                <p>My youtube channel</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='icon' icon={faPizzaSlice} size='4x'/></div>
                                <h3>I Love Pizza!</h3>
                                <p>Mainly cheese, but open to trying different kinds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MyPages;