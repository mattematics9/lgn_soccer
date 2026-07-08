import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
      <div id='header'>
          <div className='container'>
                <h2 id="header-lake-grove-newfield-text">LAKE GROVE-NEWFIELD</h2>
                <h2 id="header-soccer-club-text">SOCCER CLUB</h2>
                <div>
                    <Link to="/register"><button className="btn-large" id="register-now-btn">REGISTER NOW</button></Link>
                    <a href="#about"><button className="btn-large" id="why-lgn-btn">WHY LGN?</button></a>
                </div>
          </div>
      </div>    
  ) 
};

export default Header;
