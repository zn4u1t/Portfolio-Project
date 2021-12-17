import React from 'react';
import dogModel from '../images/dogModel.jpg';
import threeLogos from '../images/threeLogos.png';
import puzzle from '../images/puzzle.jpg';
import twoPals from '../images/twoPals.jpg';
import toolbox from '../images/toolbox.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {

//Rock-Paper-Scissors

const openPopupboxRockPaper = () => {
    const content = (
        <>
            <h2 className='popup-title'>Rock Paper Scissors Game</h2>
            <img className='portfolio-image-popupbox' src={threeLogos} alt='HTML, CSS, JS Logos...'/>
            <p>A rock paper scissors game based off a Youtube tutorial I followed.
                The game uses features such as; HTML, CSS, and JS.
            </p>
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/rock-paper-scissor', '_blank')}>Rock-Paper-Scissors</a>
            <br />
            <b>Try it out!:</b> <a className='hyper-link' onClick={() => window.open('https://rock-paper-portfolio.netlify.app/', '_blank')}>Rock-Paper-Scissors</a>
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
//Puzzle Camera Game

const openPopupboxPuzzleCam = () => {
    const content = (
        <>
            <h2 className='popup-title'>Puzzle Cam</h2>
            <img className='portfolio-image-popupbox' src={puzzle} alt='Placeholder for project 2'/>
            <p>A work in progress puzzle game, that uses your camera to generate a puzzle.</p>
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/Puzzlecam-game', '_blank')}>Puzzle Cam Repo</a>
        </>
    )
    PopupboxManager.open({content})
}

//Project 3

const openPopupboxProject3 = () => {
    const content = (
        <>
            <img className='portfolio-image-popupbox' src={puzzle} alt='Placeholder for project 3'/>
            <p>Some writing to fill in the blanks and take up space.
            This should have info about whatever project you add here.</p>
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/Random_number_game', '_blank')}>Random Number Game</a>
        </>
    )
    PopupboxManager.open({content})
}

//Project 4

const openPopupboxToolbox = () => {
    const content = (
        <>
            <h2 className='popup-title'>My Tool Box</h2>
            <img className='portfolio-image-popupbox' src={toolbox} alt='Placeholder for project 4'/>
            <p>Here you will find some scripts, templates, and code snippets that I use to simplify work.</p>
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/dark-light-toggle', '_blank')}>Dark to Light toggle in HTML, CSS</a>
            <br />
            <b>Github:</b> <a className='hyper-link' onClick={() => window.open('https://github.com/zn4u1t/Glitch-text-effect', '_blank')}>Make text glitch with HTML, CSS</a>
        </>
    )
    PopupboxManager.open({content})
}
 

    return (
        <div id='portfolio' className='portfolio-wrapper'>
            <div className='container'>
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='portfolio-image-box' onClick={openPopupboxRockPaper}>
                            <img className='portfolio-image' src={threeLogos} alt='HTML, CSS, JS Logos...' /> 
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='portfolio-image-box' onClick={openPopupboxPuzzleCam}>
                            <img className='portfolio-image' src={puzzle} alt='Puzzle Cam...' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='portfolio-image-box' onClick={openPopupboxProject3}>
                            <img className='portfolio-image' src={dogModel} alt='Max laying in the sun...' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='portfolio-image-box' onClick={openPopupboxToolbox}>
                            <img className='portfolio-image' src={toolbox} alt='Max and Nikki' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigRockPaper}/>
        </div>
    )
}
export default Portfolio;
