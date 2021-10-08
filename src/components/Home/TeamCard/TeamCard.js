import React from 'react';

const TeamCard = ({ team }) => {
    const { title, image, name } = team
    return (
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={image} alt="person" />
                <div className="card-body">
                    <p>{title}</p>
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;