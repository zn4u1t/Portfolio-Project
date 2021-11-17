import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className='d-flex justify-content-center my-5'>
                <h1>Experience</h1>
            </div>
            <div className='container experience-wrapper'>
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2009-Present</h3>
                        <ul>Quality Control for the fabrication shop at a bridge/ steel construction company. Duties inlcuded but not limited to:
                            <li>Adhering to codes and specifications of the clients to deliver a satisfactory product.</li>
                            <li>Conducting welding Procedure Qualifications, and any following Welding Procedures.</li>
                            <li>Inspceted parts and welds to blueprints, and applicable codes.</li> 
                        </ul>
                    </div>
                </div>
                {/* -- */}
                <div className='timeline-block timeline-block-right'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2017-2019</h3>
                        <ul>Attended Manchester Community College and obtained an Associates Degree in Computer Science, took classes such as:
                            <li>Professional Communications</li>
                            <li>Intro to Python</li>
                            <li>Discrete Mathematics</li>
                            <li>Object-Oriented Programming</li>
                            <li>Data Structures &#38; Elementary Algorithms</li>
                        </ul>
                    </div>
                </div>
                {/* -- */}
                <div className='timeline-block timeline-block-left'>
                    <div className='marker'></div>
                    <div className='timeline-content'>
                        <h3>2021</h3>
                        <ul>Acheived FreeCodeCamp 300 hour Javascript Certificate.</ul>
                        <ul>Built website portfolio in React.</ul>
                    </div>
                </div>
                {/* -- */}
            </div>           
        </div>
    )
}

export default Experience
