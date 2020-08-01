import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Product from '../products/Products'
import Contact from '../contact/Contact'
import Home from '../home/home'
// import Mission from '../mission/'
import './Navbar.css'

export class Navbar extends Component {
    render() {

        return (

            <Router>
                <header>

                    <Link to={'/'}><h2 className='logo'>Dutton Tea</h2></Link>
                    <nav>
                        <ul className='nav_links'>
                            <li><Link to={'/Product'}>Products</Link></li>
                            <li><Link to={'/About'}>About Us</Link></li>
                            <li><Link to={'/Contact'}>Contact</Link></li>
                            <li><Link to={'/Mission'}>Mission</Link></li>
                            <div class="button" id="button-2">
                                <div id="slide"></div>
                                <b>Order Now</b>
                            </div>
                            {/* <button className='button'>Order Now</button> */}

                        </ul>

                    </nav>
                </header>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Contact' component={Contact} />
                    {/* <Route path='/About' component={About} /> */}
                    <Route path='/Product' component={Product} />
                    {/* <Route path='/Mission' component={Mission} /> */}
                </Switch>
            </Router>

        )

    }
}

export default Navbar