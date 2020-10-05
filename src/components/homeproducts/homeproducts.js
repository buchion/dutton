import React, { Component } from 'react'
import './homeproducts.css'
// import teaimg from '../../assets/25630.jpg'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'


export class HomeProducts extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: ₦{item.price}</b></p>
                    </div>
                </div>

            )
        })

        return (

            <div className='entire'>


                <div className='section-title'><h2>PRODUCTS</h2></div>
                <div className='tabs'> <ul className='tab'> <li>GREEN&nbsp;TEA</li><li>BLACK&nbsp;TEA</li><li>COFFEE</li><li>SLIMING&nbsp;TEA</li></ul></div>
                <div className="container">
                    <div className="box">
                        {itemList}
                    </div>
                </div>


            </div>
        )
    }



    // constructor() {
    //     super()
    //     this.state = {
    //         name: 'React'
    //     }
    // }

    // render() {

    //     return (
    //         <div>

    //             <div className='section-title'><h2>DAILY DEALS</h2></div>
    //             <div className='tabs'> <ul className='tab'> <li>GREEN&nbsp;TEA</li><li>BLACK&nbsp;TEA</li><li>COFFEE</li><li>SLIMING&nbsp;TEA</li></ul></div>
    //             <div className='shopcontent'>
    //                 {
    //                     products.map(p => <product key={p.id} {...p} />)
    //                 }
    //             </div>
    //             <div className='shopcontent'>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦5,500</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦3,000</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦2,000</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦5,400</h5>
    //                     <button>ORDER</button>
    //                 </div>

    //             </div>
    //             <div className='shopcontent'>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦6,000</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦15,000</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦7,000</h5>
    //                     <button>ORDER</button>
    //                 </div>
    //                 <div className='shopItems'>
    //                     <img src={teaimg} alt='teaimg' />
    //                     <h4>Dutton Green Tea</h4>
    //                     <h5>₦5,000</h5>
    //                     <button>ORDER</button>
    //                 </div>

    //             </div>

    //         </div>
    //     );
    // }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeProducts)

// export default HomeProducts;
