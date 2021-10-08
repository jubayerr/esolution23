import React from 'react';
import './OrdersCard.css'
const OrdersCard = ({ order }) => {
    // console.log(order);
    const { name, price, orderTime } = order
    return (
        <div className="orders-card">
            <table>
                <tr>
                    <th>Service</th>
                    <th>Order Time</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{orderTime}</td>
                    <td>${price}</td>
                </tr>
            </table>
        </div>
    );
};

export default OrdersCard;