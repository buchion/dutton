import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
                {/* <video>
                    <source src='../../assets/dinotea.mp4' type='video/mp4' autoPlay></source>
                </video> */}
                <div className='outermostdiv'>
                    <div className='mapdiv'></div>
                    <h2>Get in Touch</h2>
                    <input required type='text' placeholder='Name'></input>
                    <input type='text' placeholder='Email'></input>
                    <input required type='text' placeholder='Phone'></input>
                    <input required type='text' placeholder='What will you like to know about Us'></input>
                </div>
            </div>
        )
    }
}

export default Contact
