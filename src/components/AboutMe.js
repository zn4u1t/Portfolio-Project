import React from 'react';
import author from '../images/me.jpg';
import { Link } from 'react-scroll';


const AboutMe = () => {
    return (
        <div id='about' className='about'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 col-xm-12'>
                        <div className='photo-wrap mb-5'>
                        <img className="profile-img" src={author} alt='author...'/>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xm-12'>
                        <h1 className='about-heading'>About Me</h1>
                        <p>
                        Hello, my name is Zachary. I am from Candia, NH and I am pursuing a career in web development.
                        I have experience with Python, Javascript, HTML, CSS, and React. 
                        In my free time I like to hike, snowboard, trail run, and spend time with family and friends.
                        If you think I would be a good fit for your team, 
                        please feel free to contact me via the contact form <Link smooth={false} to='contacts' offset={-110} className='about-contacts'>below.</Link> 
                        </p>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default AboutMe
