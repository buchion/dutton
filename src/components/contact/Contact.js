import React, { Component } from 'react'
import './contact.css'

export class Contact extends Component {

    render() {
        return (
            <div>
                <div className='outermostdiv'>
                    <div className='mapdiv'>
                        <h2>Get in Touch</h2><br></br>
                        <p>You can reach us at these addresses and Platforms.</p>
                        <p>Fill out the form below or send us a direct email. </p>

                    </div>

                    <div className='middle'>
                        <div className='leftwhite'>
                            <h3>Send us a Message</h3>
                            <br></br><br></br>
                            <p>Your Name</p>
                            <input required type='text' placeholder='Your Name'></input>
                            <br></br><br></br>
                            <p>Phone</p>
                            <input required type='text' placeholder='e.g 08123456789'></input>
                            <br></br><br></br>
                            <p>Email Address</p>
                            <input type='text' placeholder='example@domain.com'></input>
                            <br></br><br></br>
                            <p>Message</p>
                            <textarea rows="4" required type='textarea' placeholder='What will you like to know about Us'></textarea>
                        </div>
                        <div className='rightblue'>
                            <h3>Contact Information</h3>

                            <div className="grid-container">
                                <div className="grid-item"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"><a href="https://bit.ly/2XzNJqv" target="_blank" rel="noopener noreferrer">Shop
                                    61/62 Jigawa Plaza TradeFair Shopping Complex, BBA, Ojo Lagos, Nigeria.</a></div>

                                <div className="grid-item"><i class="fa fa-link" aria-hidden="true" ></i></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"><a href="tel:+(234) 814 7630 499">+(234) 8123456789</a></div>

                                <div className="grid-item"><i className="fa fa-envelope-o" aria-hidden="true" ></i></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"><a href="mailto: edomhel@yahoo.com">edomhel@yahoo.com</a></div>

                            </div>
                            <br></br>
                            <a className='btmlink' href="https://twitter.com/DuttonTea" target="_blank" rel="noopener noreferrer"> <i class="fa fa-twitter" aria-hidden="true"></i></a>

                            <a className='btmlink' href="https://facebook.com/DuttonTea" target="_blank" rel="noopener noreferrer"> <i class="fa fa-facebook" aria-hidden="true"></i></a>

                            <a className='btmlink' href="https://jumia.com/DuttonTea" target="_blank" rel="noopener noreferrer"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        </div>

                    </div>

                </div>

            </div>
            // </div >
        )
    }
}

export default Contact
