import React from 'react'

const About = () => {
  return (
    <div id="about">
        
        <div id="about-attributes-div">
            <div className="row" style={{margin: '0px'}}>
                <div className="col l4 m12 s12">
                    <div className="about-icon-container"><ion-icon name="trophy-outline"></ion-icon></div>
                    <h3 className='about-h3'>HISTORY OF SUCCESS</h3>
                    <div id='history-of-success-list-container'>
                        <ul id='history-of-success-list'>
                            <li>2 National Championships</li>
                            <li>7 National Finalists</li>
                            <li>6 Regional Championships</li>
                            <li>16 NY State Championships</li>
                            <li>Nationally Ranked Teams</li>
                            <li>Top Finishes in National League PRO</li>
                        </ul>
                    </div>
                    {/* <a href="history-of-success.html">Click Here to Learn More</a> */}
                </div>
                <div className="col l4 m12 s12">
                    <div className="about-icon-container"><ion-icon name="school-outline"></ion-icon></div>
                    <h3 className='about-h3'>PATHWAY TO COLLEGE SOCCER</h3>
                    <div id="pathway-to-college-soccer-list-container">
                        <ul id="pathway-to-college-soccer-list">
                            <li>Proven Track Record</li>
                            <li>Recruiting Platform</li>
                            <li>ID Clinics/Camps</li>
                            <li>Scholarships</li>
                            <li>Showcases</li>          
                        </ul>
                    </div>
                    {/* <a href="pathway-to-college-soccer.html">Click Here to Learn More</a> */}
                </div>
                <div className="col l4 m12 s12">
                    <div className="about-icon-container"><ion-icon name="football-outline"></ion-icon></div>
                    <h3 className='about-h3'>PROGRAM FOR EVERYONE</h3>
                    <div id="program-for-everyone-list-container">
                        <ul id="program-for-everyone-list">
                            <li>A Fun-centered Intramural Program</li>
                            <li>Accomodate all abilities</li>
                            <li>Teams in LIJSL, NYCSL, EDP, and USYS National League PRO</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="creating-elite-players-and-love-the-game">
            <div className='row' style={{margin: '0px'}}>
                <div className='col l6 m6 s12' style={{padding: '0px'}}><div id="love-the-game" className='center'><p>LOVE</p><p>THE</p><p>GAME</p></div></div>
                <div className='col l6 m6 s12' style={{padding: '0px'}}>
                    <div className='row' style={{margin: '0px'}}>
                        <div className='col l6 m6 s12' style={{padding: '0px'}}>
                            <div id="creating-elite-players-text" className='center'><p>CREATING ELITE PLAYERS</p></div>
                        </div>
                        <div className='col l6 m6 s12' style={{padding: '0px'}}>
                            <div id="creating-elite-players-pic"></div>
                        </div>
                    </div>
                    <div className='row' style={{margin: '0px'}}>
                        <div className='col l6 m6 s12' style={{padding: '0px'}}>
                            <div id="experts-in-soccer-and-education-pic"></div>
                        </div>
                        <div className='col l6 m6 s12' style={{padding: '0px'}}>
                            <div id="experts-in-soccer-and-education-text" className='center'><p>EXPERTS IN SOCCER AND EDUCATION</p></div>
                        </div>
                    </div>
                    <div className='row' style={{marginBottom: '0px'}}>

                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default About