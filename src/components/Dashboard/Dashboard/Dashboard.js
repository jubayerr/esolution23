import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Dashboard.css';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Payment from '../Payment/Payment';



const Dashboard = () => {



    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name, email } = loggedInUser
    // console.log(loggedInUser);
    const [services, setServices] = useState({})

    // console.log(services);

    const { _id } = useParams()

    useEffect(() => {
        fetch('https://whispering-temple-56959.herokuapp.com/dashboard/dashboard/' + _id)
            .then(res => res.json())
            .then(data => {
                const eventData = {
                    name: data.name,
                    price: data.price,
                    email: email
                }
                setServices(eventData)
            })
    }, [])

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const orderDetails = { ...services, service: data, orderTime: new Date() }
        console.log(orderDetails);
        fetch('https://whispering-temple-56959.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully')
                }
            })
    };

    return (
        <div>
            <Header />
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h2>Menu</h2>
                            <ul>
                                <li><Link to="/dashboard/orders">Order List</Link></li>
                                <li><Link to="/dashboard/addReviews">Give Riview</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <p className="lead">Your service will be <strong>${services.price}</strong></p>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                                    <label >Name</label>
                                    <input defaultValue={name} {...register("name", { required: true })} name="name" className="form-control" />
                                    <br />
                                    <label htmlFor="email">Email</label>
                                    <input defaultValue={email} {...register("email", { required: true })} name="email" className="form-control" />
                                    <br />
                                    <label htmlFor="service">Service</label>
                                    <input defaultValue={services.name} {...register("service", { required: true })} name="service" className="form-control" />
                                    <br />
                                    <input {...register("address", { required: true })} name="address" placeholder="Your Address" className="form-control" />
                                    <br />
                                    <input {...register("phone", { required: true })} name="phone" placeholder="Phone" className="form-control" />
                                    <br />
                                </div>

                                <div className="form-group">
                                    <input type="submit" className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <h2 className="pb-5">Payment</h2>
                            <Payment />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;