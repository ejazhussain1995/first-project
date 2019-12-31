import React, { Component } from 'react';
import ProductCard from '../sections/products.section';
import ReviewSection from '../sections/reviews.section';
import ShowCase from '../sections/showcase.section';
import ProductDetail from './ProductDetail.page'; 
import axios from 'axios'
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            isEmptyState: false
        }
    }

    componentDidMount() {
        console.log("componentDidMount is called")
        axios.get('http://localhost:4000/products')
        .then((res) => {
            console.log("data.......... : ", res.data)
          this.setState({ product: res.data })
        })
        .catch(console.log)
    }
    render() {
        return (
            <div className="">
                <div className="product-sec">
                    <div className="container">
                        <h1>PRODUCT</h1>
                        <div className="row">
                            {
                                this.state.product.map((card, i) => {
                                    return (
                                        <ProductCard key={i} addTrip={this.triggerAddTripState } titleTwo={card.title} description={card.description} image={card.imageUrl} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;