import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';

const SimpleCardForm = ({handlePayment}) => {
    const { user, logout } = useAuth();
   
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div className="text-danger w-50 mx-auto px-5 pt-5 border">
            <h2 className="py-5 text-center">Welcome,{user.email}</h2>
            <h2 className="py-5 text-center">Payment with Card</h2>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button style={{width:'100px', border:'2px solid blue'}} className="btn  btn-outline-success mt-4 mb-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
            {
                paymentSuccess &&  <p style={{color:'green'}}>Payment Successful</p>
            }
        </div>

    );
};
export default SimpleCardForm;