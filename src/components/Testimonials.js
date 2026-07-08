import React from 'react'
import img1 from '../images/andrew-tinari.jpg'
import img2 from '../images/telma.jpg'
import img3 from '../images/jillian.jpg'

const Testimonials = () => {
  return (
    <div id='testimonials'>
        <h3 className='center'>WHAT OUR MEMBERS HAVE TO SAY</h3>
        <div className='row' style={{margin: '0px'}}>
            <div className='col l4 m12 s12' style={{padding: '0px'}}>
                <div className='testimonials-content'>
                    <blockquote className="blockquote" style={{borderLeft: 'none'}}>This club means the world to me and has helped shape me into the person and player I am today. It has provided a professional environment to develop my play, given me so many friends, and has become part of my family.</blockquote>
                    <div className='center'><img src={img1} alt="Andrew Tinari" className='testimonials-img'/></div>
                    <div className='testimonial-signature'>
                        <p>Andrew Tinari,</p>
                        <p>Professional Soccer Player</p>
                    </div>
                </div>
            </div>
            <div className='col l4 m12 s12' style={{padding: '0px'}}>
                <div className='testimonials-content'>
                    <blockquote className="blockquote" style={{borderLeft: 'none'}}>LGN is the best! Over the years I have watched my three boys progress more than I could have imagined. The trainers are so knowledgeable and great with children! I am so happy I found a second home for my kids.</blockquote>
                    <div className='center'><img src={img2} alt="Telma Bonilla" className='testimonials-img'/></div>
                    <div className='testimonial-signature'>
                        <p>Telma Bonilla,</p>
                        <p>LGN Parent</p>
                    </div>
                </div>
            </div>
            <div className='col l4 m12 s12' style={{padding: '0px'}}>
                <div className='testimonials-content'>
                    <blockquote className="blockquote" style={{borderLeft: 'none'}}>The competitive and hard working environment that this club creates helped develop my character and prepared me to be a D1 athlete. The coaches are sincerely invested in the success of their players on and off the field.</blockquote>
                    <div className='center'><img src={img3} alt="Jillian Colucci" className='testimonials-img'/></div>
                    <div className='testimonial-signature'>
                        <p>Jillian Colucci,</p>
                        <p>D1 College Player</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;
