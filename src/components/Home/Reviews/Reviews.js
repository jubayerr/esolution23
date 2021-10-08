import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewsCard from '../ReviewsCard/ReviewsCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://whispering-temple-56959.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Client Reviews</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;