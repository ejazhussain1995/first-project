import React from 'react';

const DataCard = (props) => {
    return (
        <div className="col-md-4" key={props.key}>
            <div className="card">
                <img height={300} src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" class="btn bg-dark text-white">Visit Page</a>
                </div>
            </div>
        </div>
    )
}

export default DataCard;