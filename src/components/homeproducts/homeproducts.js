import React, { Component } from 'react'
import './homeproducts.css'
import teaimg from '../../assets/25630.jpg'


export class HomeProducts extends Component {

    render() {

        return (
            <div>

                <div className='section-title'><h2>DAILY DEALS</h2></div>
                <div className='tabs'> <ul className='tab'> <li>GREEN&nbsp;TEA</li><li>BLACK&nbsp;TEA</li><li>COFFEE</li><li>SLIMING&nbsp;TEA</li></ul></div>
                <div className='shopcontent'>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>

                    {/* </div>
                <div className='shopcontent'> */}
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomeProducts;
