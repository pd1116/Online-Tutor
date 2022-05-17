import React, { useEffect, useState } from 'react';


import Header from '../../../Components/Header/Header';
 
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
const TeacherNotification = () => {
 
    const [PaymentDetails, setPaymentDetails] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/Payment')
            .then(res => res.json())

            .then(data => setPaymentDetails(data))

    }, [])



    console.log(PaymentDetails[0]);


    return (
        <div>

            <Header></Header>
            <TeacherNavbar></TeacherNavbar>
            <div className="div">

                <h5>No Notification </h5>
                {/* {

                    PaymentDetails[0].mail ?
                        <h5>Payment Successfully done</h5>
                        :
                        <h5>payment not done</h5>



                } */}


                {/* {

                    PaymentDetails.map((PaymentDetails, index) =>

                    user.email === PaymentDetails[0].mail?

                            <h1 className="text-success">Payment successful</h1>
                            :
                            <h1 className="text-danger">Payment  not successful</h1>

                    )


                } */}
            </div>



        </div>
    );
};

export default TeacherNotification;