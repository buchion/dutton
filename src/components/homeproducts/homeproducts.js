import React, { Component } from 'react'
import './homeproducts.css'
import teaimg from '../../assets/25630.jpg'

const products = [
    {
        id: 1,
        name: 'Black Tea',
        description: 'Dutton Black Tea',
        img: '',
        price: 2000
    }, {
        id: 2,
        name: 'Green Tea',
        description: 'Dutton Green Tea',
        img: '',
        price: 2000
    },
    {
        id: 3,
        name: 'Black Tea',
        description: 'Dutton Black Tea',
        img: '',
        price: 2000
    }, {
        id: 4,
        name: 'Green Tea',
        description: 'Dutton Green Tea',
        img: '',
        price: 2000
    }

]

export class HomeProducts extends Component {

    constructor() {
        super()
        this.state = {
            name: 'React'
        }
    }

    render() {

        return (
            <div>

                <div className='section-title'><h2>DAILY DEALS</h2></div>
                <div className='tabs'> <ul className='tab'> <li>GREEN&nbsp;TEA</li><li>BLACK&nbsp;TEA</li><li>COFFEE</li><li>SLIMING&nbsp;TEA</li></ul></div>
                <div className='shopcontent'>
                    {
                        products.map(p => <product key={p.id} {...p} />)
                    }
                </div>
                <div className='shopcontent'>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,500</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦3,000</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦2,000</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,400</h5>
                        <button>ORDER</button>
                    </div>

                </div>
                <div className='shopcontent'>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦6,000</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦15,000</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦7,000</h5>
                        <button>ORDER</button>
                    </div>
                    <div className='shopItems'>
                        <img src={teaimg} alt='teaimg' />
                        <h4>Dutton Green Tea</h4>
                        <h5>₦5,000</h5>
                        <button>ORDER</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomeProducts;
