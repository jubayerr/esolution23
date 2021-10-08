import React from 'react';
import './ReviewsCard.css';

const ReviewsCard = ({ review }) => {
    const { image, title, name, desc } = review
    return (
        <div className="col-md-4">

            <div className="reviews-card">

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="lead">{desc}</p>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-4">
                                <img src={image} alt="img" />
                            </div>
                            <div className="col-md-8">
                                <h5>{name}</h5>
                                <small>{title}</small>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>

    );
};

export default ReviewsCard;