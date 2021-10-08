import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, image, name, price } = service
    const history = useHistory()
    const handleService = (_id) => {
        history.push(`/dashboard/dashboard/${_id}`)
    }
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <img src={image} className="img-fluid px-5" alt="icon" />
                    <p className="lead pt-4">${price}</p>
                    <h3 className="pb-4">{name}</h3>
                    <button onClick={() => handleService(_id)} >Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;