import React from 'react';

const ReviewSection = (props) => {
    return (
        <div className="col-md-4" key={props.key}>
            <div className="reviewcard-wrap">
                <div className="review-header">
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="review-body">
                        <span><i className="fa fa-star-half-o" aria-hidden="true"></i> <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i></span>
                    </div>
                    <h3>{props.name}</h3>
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection;