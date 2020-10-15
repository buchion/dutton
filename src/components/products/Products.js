// import React, { Component } from 'react'
// import HomeProducts from '../homeproducts/homeproducts'

// export class Products extends Component {
//     render() {
//         return (
//             <div>
//                 < HomeProducts />
//             </div>
//         )
//     }
// }

// export default Products

import React, { Component } from 'react'
import './Products.css'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'


export class Products extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>

                    <div className='image'><img src={item.img} alt={item.title} /></div>

                    <div className="text">
                        <span className="card-title">{item.title}</span><br></br><br />
                        <span to="/" onClick={() => { this.handleClick(item.id) }}><div className="fab">&#43;</div></span>


                        <div className="card-content">
                            <p>{item.desc}</p><br></br>
                            <p><b>₦{item.price}</b></p>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products)

