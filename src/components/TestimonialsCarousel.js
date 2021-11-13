import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import clouds from '../images/clouds.jpg';
import dragonfly from '../images/dragonfly.jpg';
import fallTree from '../images/fallTree.jpg';
import threeLogos from '../images/threeLogos.png';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const TestimonialsCarousel = () => {

    //Rock-Paper-Scissors

const openPopupboxRockPaper = () => {
    const content = (
        <>
            <img className='project-popupbox' src={threeLogos} alt='HTML, CSS, JS Logos...'/>
            <p>A rock paper scissors game based off a Youtube tutorial I followed.
                The game uses features such as; HTML, CSS, and JS.
            </p>
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/rock-paper-scissor', '_blank')}>Rock-Paper-Scissors</a>
            <br />
            <b>Play Now!!!:</b> <a className='hyper-link' onClick={() => window.open('https://rock-paper-portfolio.netlify.app/', '_blank')}>Rock-Paper-Scissors</a>
        </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigRockPaper = {
    titleBar: {
        enable: true,
        text: 'Rock Paper Scissors Game'
    },
    fadeIn: true,
    fadeInSpeed:500
}

    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
        >
            <>

                <div className='portfolio-image-box' onClick={openPopupboxRockPaper}>
                <PopupboxContainer { ...popupboxConfigRockPaper } />
                    <img className='portfolio-image' src={threeLogos} alt='HTML, CSS, JS Logos' />
                    <div className='myCarousel'>
                        <h3>Rock Paper Scissor Game</h3>
                        <p>Click on logo to Play!</p>
                    </div>
                </div>
            </>
            <>
                <img src={clouds} alt='clouds'/>
                <div className='myCarousel'>
                    <h3>This could...</h3>
                    <p>Considering using this as a means
                        to show off projects.</p>
                </div>
            </>
            <>
                <img src={dragonfly} alt='dragonfly'/>
                <div className='myCarousel'>
                    <h3>Work!!!</h3>
                    <p>Considering using this as a means
                        to show off projects.</p>
                </div>
            </>
            <>
                <img src={fallTree} alt='trees'/>
                <div className='myCarousel'>
                    <h3>Maybe???</h3>
                    <p>Considering using this as a means
                        to show off projects.</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
