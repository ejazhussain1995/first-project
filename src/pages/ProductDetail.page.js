import React from 'react';
import ProductCard from '../sections/products.section';

const ProductDetail = (props) => {
    return (
        <div className="col-md-12" key={props.key}>
            <div className="card">
                <img height={300} src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titleTwo}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" class="btn bg-dark text-white">Visit Page</a>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;