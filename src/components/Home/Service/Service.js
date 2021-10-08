import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [services, setServices] = useState([])
    // console.log(services);

    useEffect(() => {
        fetch('https://whispering-temple-56959.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;