import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './StudentDetails.css';
const StudentDetails = () => {


    const [studentDetails, setStudentDetails] = useState([]);

    useEffect(() => {
        console.log("hit");
        fetch('http://localhost:4000/clients')
            .then(res => res.json())
            // .then(data => console.log("our studentDetails",data));
            .then(data => setStudentDetails(data))

    }, [])


    console.log((studentDetails[0]?._id));
    //delete itemss

 

    const handleDelete=(id)=>{
        console.log("Clicked",id);
        fetch(`/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("Delete successfully")
        })
    }

         
    

    return (
        <div>

            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10 clients">

                    <h4 className="py-2 text-info">All Students</h4>
                    {/* <table className="table table-hover" > */}
                    <table className="table table-borderless">

                        <thead>
                            <tr className="bg-info text-light">

                                <th className="text-light " scope="col">Name</th>
                                <th className="text-light" scope="col">Email</th>
                                <th className="text-light" scope="col">Phone</th>
                                <th className="text-light" scope="col">Gender</th>
                                <th className="text-light" scope="col">Role</th>
                                <th className="text-light" scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-none">
                            {
                                studentDetails.map((studentDetails, index) =>

                                    studentDetails.role === "Student" ?
                                        <tr className="table-warning " >

                                            <td className="text-dark"> {studentDetails.name}</td>
                                            <td className="text-dark"> {studentDetails.mail}</td>
                                            <td className="text-dark"> {studentDetails.phone}</td>
                                            <td className="text-dark"> {studentDetails.gender}</td>
                                            <td className="text-dark"> {studentDetails.role}</td>
                                            {/* <td onClick={deleteItem(studentDetails._id)} className=" text-dark py-2 btn btn-outline-danger deleteAccount" > Delete</td> */}
                                           {
                                                <td  onClick={()=>handleDelete(`${studentDetails._id}`)} className=" text-dark py-2 btn btn-outline-danger deleteAccount" > Delete</td>


                                           }




                                        </tr>
                                        :
                                        <tr className="table-warning d-none" >

                                            {/* 
                                            <td className="text-dark"> {studentDetails.name}</td>
                                            <td className="text-dark"> {studentDetails.gmail}</td>
                                            <td className="text-dark"> {studentDetails.phone}</td>
                                            <td className="text-dark"> {studentDetails.gender}</td>
                                            <td className="text-dark"> {studentDetails.role}</td> */}
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

export default StudentDetails;