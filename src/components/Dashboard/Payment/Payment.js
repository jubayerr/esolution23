import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import MyCheckoutForm from '../MyCheckoutForm/MyCheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51IhrVjDQZVHMEoNED2mFuTSMa3UhsivoruAnlF6IX7OSpXffALDNrhGVajkk2NyVSMZOzxkmEYcN0GNDfAqUyqWP00sMY3ZHZc');
    return (
        <div>
            <Elements stripe={stripePromise}>
                <MyCheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;