import React from 'react';
import threeLogos from '../images/threeLogos.webp';
import helmet from '../images/helmet.png';
import python from '../images/python.png';
import toolbox from '../images/toolbox.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './Portfolio.css';
import GameApp from '../pages/GameApp';

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
            <button className='play-button' onClick={openPopupboxMagicGame}>Play Now</button>
        </>
    )
    PopupboxManager.open({content})
}

// Popup within a popup? Is this bad practice?

const openPopupboxMagicGame = () => {
    const content = (
        <div className='game'>
            <GameApp />
        </div>
    )
    PopupboxManager.open({content})
}

//Project 3

const openPopupboxProject3 = () => {
    const content = (
        <>
            <img className='portfolio-image-popupbox' src={python} alt='Placeholder for project 3'/>
            <p>Some python scripts</p>
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/Random_number_game' target='_blank' rel='noreferrer'>Random Number Game</a>
            <br />
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/enigma-machine' target='_blank' rel='noreferrer'>Enigma Machine</a>
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
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/dark-light-toggle' target='_blank' rel='noreferrer'>Dark to Light toggle in HTML, CSS</a>
            <br />
            <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/Glitch-text-effect' target='_blank' rel='noreferrer'>Make text glitch with HTML, CSS</a>
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
                        <div className='portfolio-image-box' onClick={openPopupboxMagicMemory}>
                            <img className='portfolio-image' src={helmet} alt='A helmet...' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='portfolio-image-box' onClick={openPopupboxProject3}>
                            <img className='portfolio-image' src={python} alt='Max laying in the sun...' />
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
