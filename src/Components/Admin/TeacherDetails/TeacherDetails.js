import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './TeacherDetails.css';
import DeleteIcon from '@mui/icons-material/Delete';

const TeacherDetails = () => {


    const [TeacherDetails, setTeacherDetails] = useState([]);

    useEffect(() => {
         
        fetch('http://localhost:4000/Clients')
            .then(res => res.json())
             
            .then(data => setTeacherDetails(data))

    }, [TeacherDetails])


     
    //delete itemss

 

    const handleDelete=(id)=>{
        console.log("Clicked",id);
        fetch(`http://localhost:4000/delete/${id}`,{
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

                    <h4 className="py-2 text-info">All Teachers</h4>
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
                                TeacherDetails.map((TeacherDetails, index) =>

                                    TeacherDetails.role === "Teacher" ?
                                        <tr className="table table-borderless" >

                                            <td className="text-dark"> {TeacherDetails.name}</td>
                                            <td className="text-dark"> {TeacherDetails.mail}</td>
                                            <td className="text-dark"> {TeacherDetails.phone}</td>
                                            <td className="text-dark"> {TeacherDetails.gender}</td>
                                            <td className="text-dark"> {TeacherDetails.role}</td>
                                            {/* <td onClick={deleteItem(TeacherDetails._id)} className=" text-dark py-2 btn btn-outline-danger deleteAccount" > Delete</td> */}
                                           {
                                                <td onClick={()=>handleDelete(`${TeacherDetails._id}`)} className=" text-light py-2 bg-danger btn btn-outline-danger  deleteAccount" > <DeleteIcon></DeleteIcon>   Delete</td>


                                           }




                                        </tr>
                                        :
                                        <tr className="table-warning d-none" >

                                            {/* 
                                            <td className="text-dark"> {TeacherDetails.name}</td>
                                            <td className="text-dark"> {TeacherDetails.gmail}</td>
                                            <td className="text-dark"> {TeacherDetails.phone}</td>
                                            <td className="text-dark"> {TeacherDetails.gender}</td>
                                            <td className="text-dark"> {TeacherDetails.role}</td> */}
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

export default TeacherDetails;