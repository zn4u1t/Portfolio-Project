import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

// images
import clouds from '../images/clouds.jpg';
import helmet from '../images/helmet.png';
import fallTree from '../images/fallTree.jpg';
import threeLogos from '../images/threeLogos.png';

const TestimonialsCarousel = () => {

//Rock-Paper-Scissors

const openPopupboxRockPaper = () => {
    const content = (
        <>
            <h2 className='popup-title'>Rock Paper Scissors Game</h2>
            <img className='portfolio-image-popupbox' src={threeLogos} alt='HTML, CSS, JS Logos...'/>
            <p>A rock paper scissors game based off a Youtube tutorial I followed.
                The game uses features such as; HTML, CSS, and JS.
            </p>
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/rock-paper-scissor' target='_blank' rel='noreferrer'>Rock-Paper-Scissors</a>
            <br />
            <b>Try it out!:</b> <a className='hyper-link' href='https://rock-paper-portfolio.netlify.app/' target='_blank' rel='noreferrer'>Rock-Paper-Scissors</a>
        </>
    )
    PopupboxManager.open({content})
}

const popupboxConfigRockPaper = {
    titleBar: {
        enable: false,
        text: 'No title'
    },
    fadeIn: true,
    fadeInSpeed:500
}
//Magic memory game

const openPopupboxMagicMemory = () => {
    const content = (
        <>
            <h2 className='popup-title'>Magic Memory Game</h2>
            <img className='portfolio-image-popupbox' src={helmet} alt='A helmet'/>
            <p>A work in progress magic memory game built in React.</p>
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/magic-memory' target='_blank' rel='noreferrer'>Magic Memory Game Repo</a>
            <br />
            <b>Play Now!</b> <Link to='/game' >Magic Memory Game!</Link>
        </>
    )
    PopupboxManager.open({content})
}

    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
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
                <div className='portfolio-image-box' onClick={openPopupboxMagicMemory}>
                <PopupboxContainer { ...popupboxConfigRockPaper } />
                    <img className='portfolio-image' src={helmet} alt='helmet icon for game' />
                    <div className='myCarousel'>
                        <h3>Magic Memory Game</h3>
                        <p>Try and match all the icons in as little turns as possible!</p>
                    </div>
                </div>
            </>
            <>
                <img src={clouds} alt='helmet icon for game'/>
                <div className='myCarousel'>
                    <h3>not the game</h3>
                    <p>Try and match all the icons in as little turns as possible!</p>
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
