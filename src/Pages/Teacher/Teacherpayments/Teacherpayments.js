import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
 

const stripePromise = loadStripe('pk_test_51Kxy0jEF61t2IYKGVpXNDQOT51eyV7TfF0IIpAk6nUWVZOgHGQpZhvakQbU5hBtbZPNgcwGlkSLGQVKg3N6vLkte00kPvWSuzD');

const Teacherpayments = () => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm ></SimpleCardForm>
        </Elements>
    );
};

export default Teacherpayments;