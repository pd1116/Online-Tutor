import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DoneIcon from '@mui/icons-material/Done';
const Payments = () => {

    const [PaymentDetails, setPaymentDetails] = useState([]);

    useEffect(() => {
         
        fetch('http://localhost:4000/Payment')
            .then(res => res.json())
             
            .then(data => setPaymentDetails(data))

    }, [ ])
 



const handleApprove=(id)=>{
    console.log("Clicked",id);
    alert(id);

    
}

    return (
        <div>

            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info">Payments List of Teachers</h4>
                    {/* <table className="table table-hover" > */}
                    <table className="table table-borderless">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Id</th>
                                <th className="text-light" scope="col">Email</th>
                                <th className="text-light" scope="col">Action</th>
                            </tr>
                        </thead>


                        <tbody className="text-none">
                            {
                                PaymentDetails.map((PaymentDetails, index) =>

                                     
                                        <tr className="table table-borderless" >

                                            <td className="text-dark"> {PaymentDetails._id}</td>
                                            <td className="text-dark"> {PaymentDetails.mail}</td>
                                             
                                            {/* 4706 6145 0054 0122 */}
                                           {
                                                <td onClick={()=>handleApprove(`${PaymentDetails._id}`)} className=" text-light py-2 bg-success btn btn-outline-success  deleteAccount" > <DoneIcon></DoneIcon>   Paid</td>


                                           }




                                        </tr>
                             






                                )
                               
                                
                            }
                    </tbody>
 
                 

                </table>



            </div>

        </div>

        </div >
    );
};

export default Payments;