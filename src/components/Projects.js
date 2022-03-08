import React from 'react';
import ScrollLock from 'react-scroll-lock-component'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import GameApp from '../pages/GameApp';

// images
import darkRockPaper from '../images/rock-paper-darkmode.png'
import memoryThumbnail from '../images/magic-match-thumb.png'
import rockPaper from '../images/rock-paper-scissor.png'
import memoryMatch from '../images/magic-match.png'
import moneyThumbnail from '../images/money-tracker-thumbnail.png'
import gardenMoney from '../images/money-tracker.png'
import cookbookThumbnail from '../images/cookbook-thumbnail.png'
import cookbook from '../images/cookbook.png'
import python from '../images/python.png';
import pythonThumbnail from '../images/python-thumbnail.png'
import toolbox from '../images/toolbox.webp';

// styles
import './Projects.css';

const Experience = () => {

//Rock-Paper-Scissors

const openPopupboxRockPaper = () => {
    const content = (
        <ScrollLock>
            <div>
                <h2 className='popup-title'>Rock Paper Scissors Game</h2>
                <img className='portfolio-image-popupbox' src={rockPaper} alt='HTML, CSS, JS Logos...'/>
                <p>A rock paper scissors game based off a Youtube tutorial I followed.
                    The game uses features such as; HTML, CSS, and JS.
                </p>
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/rock-paper-scissor' target='_blank' rel='noreferrer'>Rock-Paper-Scissors</a>
                <br />
                <b>Try it out!:</b> <a className='hyper-link' href='https://rock-paper-portfolio.netlify.app/' target='_blank' rel='noreferrer'>Rock-Paper-Scissors</a>
            </div>
        </ScrollLock>
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
        <ScrollLock>
            <div>
                <h2 className='popup-title'>Magic Memory Game</h2>
                <img className='portfolio-image-popupbox' src={memoryMatch} alt='A helmet'/>
                <p>A work in progress magic memory game built in React.</p>
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/magic-memory' target='_blank' rel='noreferrer'>Magic Memory Game Repo</a>
                <br />
                <button className='play-button' onClick={openPopupboxMagicGame}>Play Now</button>
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}

// Popup within a popup? Is this bad practice?

const openPopupboxMagicGame = () => {
    const content = (
        <ScrollLock>
            <div className='game'>
                <GameApp />
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}

//Project 3

const openPopupboxProject3 = () => {
    const content = (
        <ScrollLock>
            <div>
                <img className='portfolio-image-popupbox' src={python} alt='Placeholder for project 3'/>
                <p>Some python scripts</p>
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/Random_number_game' target='_blank' rel='noreferrer'>Random Number Game</a>
                <br />
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/enigma-machine' target='_blank' rel='noreferrer'>Enigma Machine</a>
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}

//Project 4

const openPopupboxToolbox = () => {
    const content = (
        <ScrollLock>
            <div>
                <h2 className='popup-title'>My Tool Box</h2>
                <img className='portfolio-image-popupbox' src={toolbox} alt='Placeholder for project 4'/>
                <p>Here you will find some scripts, templates, and code snippets that I use to simplify work.</p>
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/dark-light-toggle' target='_blank' rel='noreferrer'>Dark to Light toggle in HTML, CSS</a>
                <br />
                <b>Github:</b> <a className='hyper-link' href='https://github.com/zn4u1t/Glitch-text-effect' target='_blank' rel='noreferrer'>Make text glitch with HTML, CSS</a>
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}
 
//Cookbook app!

const openPopupboxCooking = () => {
    const content = (
        <ScrollLock>
            <div>
                <h2 className='popup-title'>Cookbook</h2>
                <img className='portfolio-image-popupbox' src={cookbook} alt='screenshot of cooking tracking app'/>
                <p>An easy way to save all of your favorite recipes to find in one convenient location. Users can also include a link if the recipe came from somewhere else.</p>
                <br />
                <b>Demo Site:</b> <a className='hyper-link' href='https://my-little-cookbook.web.app/' target='_blank' rel='noreferrer'>My Little Cookbook</a>
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}

//Project 6

const openPopupboxMoneyTracker = () => {
    const content = (
        <ScrollLock>
            <div>
                <h2 className='popup-title'>Garden Money Tracker</h2>
                <img className='portfolio-image-popupbox' src={gardenMoney} alt='Placeholder for project 4'/>
                <p>A money trackng website that allows a user to log in and save transactions they made to help them better track their purchases..</p>
                <br />
                <b>Demo Site:</b> <a className='hyper-link' href='https://my-money-ca10b.web.app/' target='_blank' rel='noreferrer'>Garden Money Tracker</a>
            </div>
        </ScrollLock>
    )
    PopupboxManager.open({content})
}

    return (
        <div id='projects' className='projects'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Projects</h1>
            </div>
            <div className='container projects-wrapper'>
                <div className='timeline-block-left'>
                    <div className='timeline-content'>
                        <h3>Rock, Paper, Scissors Game</h3>
                        <div className='project-image-box' onClick={openPopupboxRockPaper}>
                            <img className='project-image-left' src={darkRockPaper} alt='Rock paper scissors screenshot' />
                        </div>
                    </div>
                </div>
                <span className='timline-block-right-text'>A rock paper scissors game based off a Youtube tutorial I followed. The game uses features such as; HTML, CSS, and JS.</span> 
                {/* -- */}
                <div className='timeline-block-right'>
                    <div className='timeline-content'>
                        <h3>Magic Memory Game</h3>
                        <div className='project-image-box' onClick={openPopupboxMagicMemory}>
                            <img className='project-image-right' src={memoryThumbnail} alt='A helmet...' />
                        </div>
                    </div>
                </div>
                <span className='timeline-block-left-text'>Magic memory game made in React, using Javascript, HTML, CSS. 
                Utilizes hooks such as useState, and useEffect. Try it out, and see how many turns it takes you to match all of the cards.</span>
                {/* -- */}
                <div className='timeline-block-left'>
                    <div className='timeline-content'>
                        <h3>Garden Money Tracker</h3>
                        <div className='project-image-box' onClick={openPopupboxMoneyTracker}>
                            <img className='project-image-left' src={moneyThumbnail} alt='screenshot of money tacking app' />
                        </div>
                    </div>
                </div>
                <span className='timeline-block-right-text'>A money tracking website, made with Javascript, CSS, Firebase, & React using custom made hooks.</span>
                {/* -- */}
                <div className='timeline-block-right'>
                    <div className='timeline-content'>
                        <h3>My Little Cookbook</h3>
                        <div className='project-image-box' onClick={openPopupboxCooking}>
                            <img className='project-image-right' src={cookbookThumbnail} alt='screenshot of cooking app' />
                        </div>
                    </div>
                </div>
                <span className='timeline-block-left-text'>A site for saving favorite recipes found on various websites.</span>
                {/* -- */}
                <div className='timeline-block-left'>
                    <div className='timeline-content'>
                        <h3>Python</h3>
                        <div className='project-image-box' onClick={openPopupboxProject3}>
                            <img className='project-image-left' src={pythonThumbnail} alt='Max laying in the sun...' />
                        </div>
                    </div>
                </div>
                <span className='timeline-block-right-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus cum voluptates aperiam quam! Et veritatis architecto ut, dolor doloribus velit aliquam deleniti, quo deserunt voluptas ipsam id repudiandae esse.</span>
                {/* -- */}
                <div className='timeline-block-right'>
                    <div className='timeline-content'>
                        <h3>My Toolbox</h3>
                        <div className='project-image-box' onClick={openPopupboxToolbox}>
                            <img className='project-image-right' src={toolbox} alt='a metal toolbox' />
                        </div>
                    </div>
                </div>
                <span className='timeline-block-left-text'>A collection of snippets, and codes for easy re-use.</span>
            </div>
            <PopupboxContainer {...popupboxConfigRockPaper}/>           
        </div>
    )
}

export default Experience
