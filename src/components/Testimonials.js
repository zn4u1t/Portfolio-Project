import React from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';

import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h1>Games</h1>
            <div className='container'>
                <div className='testimonials-content'>
<TestimonialsCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
