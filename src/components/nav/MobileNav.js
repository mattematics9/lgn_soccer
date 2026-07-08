import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MobileNav = () => {

    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        let pathParts = pathname.split('/');
        let page = pathParts[1];

        if(page === ''){
            page = 'home';
        }

        const array = ['home', 'about', 'contact', 'resources', 'board', 'register'];

        if(array.includes(page)){
            document.querySelectorAll('.mobile-nav-link').forEach(mobileNavLink => {
                mobileNavLink.className = 'mobile-nav-link';
            })
            document.getElementById(`mobile-${page}-link`).className = 'mobile-nav-link active-mobile-nav-link';
        }
    },[pathname])



    return (
        <div>
            <ul className="sidenav" id="mobile-nav">
                <li className = 'mobile-nav-link' id='mobile-home-link'><Link to='/' className='sidenav-close'>HOME</Link></li>
                <li className = 'mobile-nav-link' id='mobile-about-link'><Link to='/about' className='sidenav-close'>ABOUT</Link></li>
                <li className = 'mobile-nav-link' id='mobile-uniforms-link'><Link to='https://soccerpostshop.myshopify.com/apps/soccer-post-prod/guest/invite/dGVhbV9pZD05NTQ4JmNsdWJfaWQ9NDI5JnR5cGU9cGxheWVy' target='_blank' rel="noreferrer" className='sidenav-close'>UNIFORMS</Link></li>
                <li className = 'mobile-nav-link' id='mobile-resources-link'><Link to='/resources' className='sidenav-close'>RESOURCES</Link></li>
                <li className = 'mobile-nav-link' id='mobile-board-link'><Link to='/board' className='sidenav-close'>BOARD</Link></li>
                <li className = 'mobile-nav-link' id='mobile-contact-link'><Link to='/contact' className='sidenav-close'>CONTACT</Link></li>
                <li className = 'mobile-nav-link' id='mobile-register-link'><Link to='/register' className='sidenav-close'>REGISTER</Link></li>
                <li className = 'mobile-nav-link' id='mobile-register-link'><Link to='https://lgn.checkoutstores.com/' className='sidenav-close'>CLUB STORE</Link></li>
            </ul>
        </div>
    )
}

export default MobileNav