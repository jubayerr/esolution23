import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Orderlist.css'

const Orderlist = () => {
    const [orderlist, setOrderlist] = useState([])

    useEffect(() => {
        fetch('https://whispering-temple-56959.herokuapp.com/orderslist')
            .then(res => res.json())
            .then(data => setOrderlist(data))
    }, [])
    return (
        <div>
            <Header />
            <div className="orderlist">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>Menu</h2>
                            <ul>
                                <li>
                                    <Link to="/admin">Admin</Link>
                                </li>
                                <li>
                                    <Link to="/orderlist">Order list</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {
                                orderlist.map(order => <li>{order.name}</li>)
                            }
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Orderlist;