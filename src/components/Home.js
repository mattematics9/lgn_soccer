import React from 'react'
import Header from './Header'
import About from './About'
import Contact from './Contact'
import Testimonials from './Testimonials'
import Register from './programs/Register'

const Home = () => {
  return (
    <>
       <Header/> 
       <About/>
       <Contact/>
       <Register/>
       <Testimonials/>
    </>
  )
}

export default Home