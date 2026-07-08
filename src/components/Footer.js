import React from 'react';

const Footer = () => {
    return(
        <div id='footer'>
            <div id='footer-1' className='center'>
                <h6>LGN Soccer Club</h6>
                <h6>"NOW WE PLAY"</h6>
            </div>
            <div id='footer-2' className='center'>
                <a href='/'>HOME</a>
                <a style={{marginLeft: '10px'}} href='/about'>ABOUT</a>
                <a style={{marginLeft: '10px'}} href='https://soccerpostlongisland.tuosystems.com/shopping/1731222' target='_blank' rel='noreferrer'>UNIFORMS</a>
                <a style={{marginLeft: '10px'}} href='/resources'>RESOURCES</a>
                <a style={{marginLeft: '10px'}} href='/board'>BOARD</a>
                <a style={{marginLeft: '10px'}} href='/contact'>CONTACT</a>
                <a style={{marginLeft: '10px'}} href='/register'>REGISTER</a>
            </div>
        </div>
        
    )
};

export default Footer;
