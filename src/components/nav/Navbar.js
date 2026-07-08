import React, { useEffect } from 'react'
import M from 'materialize-css'
import { Link, useLocation } from 'react-router-dom'
import MobileNav from './MobileNav'
import img1 from '../../images/logo-no-whitespace.png'

const Navbar = () => {

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
      var sidenav = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sidenav, {});
  }, [])

  useEffect(() => {
      let pathParts = pathname.split('/');
      let page = pathParts[1];

      if(page === ''){
          page = 'home';
      }

      const array = ['home', 'about', 'contact', 'resources', 'board', 'register', 'club-store'];

      if(array.includes(page)){
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.className = 'nav-link';
        })
        document.getElementById(`${page}-link`).className = 'nav-link active-nav-link'; 
      }else{
        document.querySelectorAll('.nav-link').forEach(navLink => {
          navLink.className = 'nav-link';
      })
      }
  },[pathname])


  return (
    <>
      <nav className="nav-wrapper" style={{top: '0px', zIndex: 998, position: 'fixed'}}>

          <Link to="/" className="brand-logo left hide-on-med-and-down">
            <img id="logo" src={img1} alt="Logo" className="responsive-img"/>
          </Link>
          <Link to="#" className="sidenav-trigger" data-target="mobile-nav">
              <i className="material-icons">menu</i>
          </Link>
          
            <ul className="hide-on-med-and-down left" id='nav-list'>
                <li className='nav-link-top' id='home-link'><Link to='/'>HOME</Link></li>     
                <li className='nav-link-top' id='about-link'><Link to='/about'>ABOUT</Link></li>     
                <li className='nav-link-top' id='uniforms-link'><Link to='https://soccerpostshop.myshopify.com/apps/soccer-post-prod/guest/invite/dGVhbV9pZD05NTQ4JmNsdWJfaWQ9NDI5JnR5cGU9cGxheWVy' target='_blank' rel='noreferrer'>UNIFORMS</Link></li>     
                <li className='nav-link-top' id='resources-link'><Link to='/resources'>RESOURCES</Link></li>     
                <li className='nav-link-top' id='board-link'><Link to='/board'>BOARD</Link></li>     
                <li className='nav-link-top' id='contact-link'><Link to='/contact'>CONTACT</Link></li>     
                <li className='nav-link-top' id='register-link'><Link to='/register'>REGISTER</Link></li>     
                <li className='nav-link-top' id='register-link'><Link to='https://lgn.checkoutstores.com/'>CLUB STORE</Link></li>     
            </ul>

      </nav>
      <MobileNav/>

    </>
  )
}

export default Navbar