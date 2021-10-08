import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import OrdersCard from '../OrdersCard/OrdersCard';
import './Orders.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { email } = loggedInUser

    const [orders, setOrders] = useState([])
    // console.log(orders);

    useEffect(() => {
        fetch('https://whispering-temple-56959.herokuapp.com/orders?email=' + email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <Header />
            <div className="orders">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Menu</h2>
                            <ul>
                                <li><Link to="/dashboard/orders">Order List</Link></li>
                                <li><Link to="/dashboard/addReviews">Give Riview</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {
                                orders.map(order => <OrdersCard key={order._id} order={order}></OrdersCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Orders;