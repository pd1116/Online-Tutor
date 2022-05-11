import React, { useEffect, useState } from 'react';


import Header from '../../../Components/Header/Header';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
const TeacherNotification = () => {
  
    const { user } = useAuth();
    const [PaymentDetails, setPaymentDetails] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/Payment')
            .then(res => res.json())

            .then(data => setPaymentDetails(data))

    }, [])






    return (
        <div>

            <Header></Header>
            <TeacherNavbar></TeacherNavbar>
            <div className="div">

                {/* {



                    // success?
                    user.email === PaymentDetails.mail ?
                        <h1 className="text-danger"> Payment not  successful </h1>

                        :

                        <h1 className="text-success">Payment successful  </h1>




                } */}

                {/* 
                {

                    PaymentDetails.map((PaymentDetails, index) =>

                    user.email === PaymentDetails.mail && PaymentDetails._id === PaymentDetails._id ?

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