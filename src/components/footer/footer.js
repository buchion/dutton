import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
    render() {

        return (

            <footer>
                <div>
                    <nav className='.nav'>
                        <ul>
                            <li className='Alogo'>DUTTON</li>
                            <p>© 2020 DUTTON<br></br> All rights<br></br> Reserved</p>
                            {/* <li>© 2020 DUTTON</li>
                            <li>All rights</li>
                            <li>Reserved</li> */}
                        </ul>

                    </nav>
                </div>
                <div>
                    <nav className='.nav'>
                        <ul>
                            <li><b>ABOUT US</b></li>
                            <li>About Us</li>
                            <li>Store Location</li>
                            <li>Contact</li>
                        </ul>

                    </nav>
                </div>
                <div>
                    <nav className='.nav'>
                        <ul>
                            <li><b>USEFUL LINKS</b></li>
                            <li>Returns</li>
                            <li>Support Policy</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>

                    </nav>
                </div>
                <div>
                    <nav className='.nav'>
                        <ul>
                            <li><b>FOLLOW US</b></li>
                            <li>Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>

                    </nav>
                </div>
                <div>
                    <nav className='.nav'>
                        <ul>
                            <li><b>SUBSCRIBE</b></li>
                            <p>Get E-mail updates about<br></br> our latest shop<br></br> and special offers.</p>
                            <li><input className='subscribeInput' placeholder='Enter your Email'></input></li>
                            <li><u>SUBSCRIBE</u></li>
                        </ul>

                    </nav>
                </div>


            </footer>

        )

    }
}

export default Footer