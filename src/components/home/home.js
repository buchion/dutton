import React, { Component } from 'react'
import HomeProducts from '../homeproducts/homeproducts'
import './home.css';
import teaimg from '../../assets/25630.jpg'
import support from '../../assets/support.svg'
import delivery from '../../assets/delivery.svg'
import mug from '../../assets/mug.svg'


export class Home extends Component {

    // componentDidMount() {
    //     document.body.classList.add('home')
    // }

    // componentWillUnmount() {
    //     document.body.classList.remove('home')
    // }


    render() {

        return (
            <div>
                <div className='home'>
                    <div className='title'>
                        <h1>DUTTON</h1>
                        <h1>TEA</h1>
                        <p>Dutton offers premium healthy tea that aids in your wellbeing</p>
                        <div className="buttonshop" id="button-5">
                            <div id="translate"></div>
                            <b>SHOP NOW!</b>
                        </div>
                    </div>
                </div>
                <div className='thirddiv'>
                    <div className='supportdiv'>
                        <img className='icos' src={delivery} alt='delivery' />
                        <h4>Fast Delivery</h4>
                        <p>We offer Quick delivery to your doorsteps to save you the stress and hassle of going to the mart.</p>
                    </div>
                    <div className='supportdiv'>
                        <img className='icos' src={support} alt='support' />
                        <h4>Support 24/7</h4>
                        <p>We are availble 24-hours a day, 7-days a week to pick your call and answer any question you might have.</p>
                    </div>
                    <div className='supportdiv'>
                        <img className='icos' src={mug} alt='mug' />
                        <h4>Guaranteed Benefits</h4>
                        <p>Dutton tea guarantees all the added health benefits of tea. Boost your immune system and keeps you healthy.</p>
                    </div>
                </div>
                < HomeProducts />
                <div className='seconddiv'>
                    <h1>A CUP OF DUTTON A DAY</h1>
                    <div className='secondFlex'>
                        <img src={teaimg} alt='teaimg' />
                        <div className='rightdiv'>
                            <h3>A CUP OF DUTTON A DAY KEEPS THE DOCTOR AWAY</h3>
                            <h4>Legend has it that Buddhist monks used Matcha to enhance their focus for long hours of meditation, and to be alert and present in the moment. Today's Matcha leaf comes from shade grown green tea whose chlorophyll-rich leaves are finely ground into a brilliant green powder, prized for its abilities.</h4>
                            <h4>Legend has it that Buddhist monks used Matcha to enhance their focus for long hours of meditation, and to be alert and present in the moment. Today's Matcha leaf comes from shade grown green tea whose chlorophyll-rich leaves are finely ground into a brilliant green powder, prized for its abilities.</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
