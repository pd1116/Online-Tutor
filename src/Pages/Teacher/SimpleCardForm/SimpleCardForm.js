import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import TeacherSidebar from '../TeacherSidebar/TeacherSidebar';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';

const SimpleCardForm = () => {
    const { user, logout } = useAuth();
    console.log(user);
    const [payment,setPayment] =useState([])

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const teacherEmail = user.email;
    // const handleClick = e => {
    //     // alert(user.email)
       
    //     fetch('http://localhost:4000/Payment',{
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email: user.email })
    //     })
    //         .then(res => res.json())
    //     e.preventDefault();
    // }


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
            //payment successful
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);


            fetch('http://localhost:4000/Payment',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
                .then(res => res.json())
                
                .then(data => console.log("payment email",data))
                .catch(err => console.log(err))

        
                
        }

        

    };

    return (
        <div>

            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <TeacherSidebar></TeacherSidebar>
                </div>

                <div className="col-md-10 mt-4">
                    <div className="text-danger w-50 mx-auto px-5 pt-5 border">
                        <h2 className="py-3 text-center text-dark">Welcome to Payment Section </h2>
                        <h6 className="py-2 text-center ">Note: Payment with Card</h6>
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            <input className="mt-3 form-control" type="text" placeholder="Enter ammount" value={user.email} /> <br />
                            <input className="mt-3 form-control" type="text" placeholder="Enter ammount" /> <br />
                            <button  style={{ width: '100px', border: '2px solid blue' }} className="btn  btn-outline-success mt-4 mb-4" type="submit" disabled={!stripe}>
                                Pay
                            </button>
                        </form>
                        {
                            paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                        }
                        {
                            paymentSuccess && <p style={{ color: 'green' }}>Payment Successful</p>
                        }
                    </div>

                </div>

            </div>
        </div>








    );
};
export default SimpleCardForm;