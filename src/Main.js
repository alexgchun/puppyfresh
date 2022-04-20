import React, {useState} from 'react'
import Nav from './Nav'
import Modal from './Modal'
import Countdown from 'react-countdown'
import arrow from './images/arrow.png'
import Framer from './Framer'
import star from './images/star.png'

const BUTTON_WRAPPER_STYLE = {
        position: 'relative',
        zIntex: 1
    }

    const OTHER_CONTENT_STYLE = {
        position: 'relative',
        zIntex: 2,
        backgroundColor: '',
    }

export default function Main() {
    const [isOpen, setisOpen] = useState(false)

    return (
        <div style={OTHER_CONTENT_STYLE} className="container">
      <Nav />

      <div className="App">
        
        <div className='circle'></div>
        <div className='main-container'>

          <div className="row">
            <div className="column left">
              <div className="left-one">
                <p>treat your dog right</p>
              </div>

              <div className="clock">
                <span className="inner-clock"><Countdown date={(Date.now() + 1000000000 * Math.random())} /></span>
              </div>

              <div className="info">
              <h1>Don't Miss Out</h1>
              <p><b className='bold'>Sign up</b> now to get up to <b className='bold'>25% off!</b> IPhone hell of taiyaki roof party raw denim chartreuse fingerstache knausgaard semiotics yr.</p>

              </div>

            </div>
            <div className="column right">
              
              <div className="right-one">
                <div className="right-container">
                    <h1>600+</h1>
                    <p>Products</p>
                </div>
                <div className="right-container">
                    <h1>4.8 <img src={star} className="star" alt="" /></h1>
                    <p>Average rating</p>
                </div>
              </div>
              
              <div className="sign-up">

                    <div style={BUTTON_WRAPPER_STYLE}>

                         <button class="sign-up-button" onClick={() => setisOpen(true)}><span>Sign Up</span> <img class="arrow" src={arrow} alt="" /></button>

                         <Modal open={isOpen} onClose={() => setisOpen(false)}>
                        <form
                        action="https://formspree.io/f/xvolwwaa"
                        method="POST"
                        >
                            <div className='form-container'>
                                <label>
                            Name:
                            <br /><input type="text" name="name" required/>
                            </label>
                        
                            <label>
                                Your Email:
                                <br /><input type="email" name="email" required/>
                            </label>
                            <label>
                                Your message:
                                <br /><textarea name="message"></textarea>
                            </label>
                        
                            <button className="modal-button" type="submit">Send</button>
                            </div>
                            
                        </form>

                         </Modal>
                    </div>
                   
                    

              </div>

            </div>
          </div>

        </div>
      </div>
    
    <div className='carousel-container'>
        
        <Framer />
    </div>
    <footer>

    </footer>
    
    </div>
    )
} 