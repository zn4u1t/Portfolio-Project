import React from 'react';
import author from '../me.jpg';

const AboutMe = () => {
    return (
        <div id='about' className='about'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 col-xm-12'>
                        <div className='photo-wrap mb-5'>
                        <img className='profile-img' src={author} alt='author...'/>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xm-12'>
                        <h1 className='about-heading'>About Me</h1>
                        <p>
                        A lot of writing about random things to take up space to add to the effect that all of this is working.
                        I could be writing an about me, 
                        but i don't really know what to say about myself.
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default AboutMe
