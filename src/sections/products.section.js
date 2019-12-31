import React from 'react';
import ProductDetail from '../pages/ProductDetail.page'; 
import {
    Link
  } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="col-md-4" key={props.key}>
            <div className="card">
                <img height={300} src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.titleTwo}</h5>
                    <p className="card-text">{props.description}</p>
                    <button className="btn bg-dark text-white">
                    <Link className="text-white" to="/detail">Visit Page</Link>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductCard;