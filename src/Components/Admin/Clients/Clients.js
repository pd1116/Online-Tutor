import React from 'react';
import './Clients.css';
const Clients = ({ clients }) => {
    // const {name,email,gender,role,phone} = clientsinfo;

    let studentCnt=0,teacherCnt=0;
        for(let i=0;i<clients.length;i++){
            if(clients[i].role==='Student')
                studentCnt++;
            else
                teacherCnt++;
        }
        console.log(studentCnt,teacherCnt);

    return (
        <div className="clients text-left">
             

            <div className="userss">
            <h4 className="py-2 text-info pb-0 mb-0"> Dashboard</h4>
                <div className="row text-center text-md-left">

                    <div className="col-12 col-md-3 m-4 bg-info clientsinfo">
                        <div className="row  ">
                            <h2 className="col-md-4  pt-2  currentuser text-center"> {clients.length} </h2>
                            <h4 className="col-md-8 pt-4 "> Total <br /> User</h4>

                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-4 bg-danger clientsinfo">
                        <div className="row  ">
                            <h2 className="col-md-4  pt-2  currentuser text-center"> {teacherCnt} </h2>
                            <h4 className="col-md-8 pt-4 "> Total <br></br> Teacher</h4>

                        </div>
                    </div>
                    <div className="col-12 col-md-3 m-4 bg-success clientsinfo">
                        <div className="row  ">
                            <h2 className="col-md-4  pt-2  currentuser text-center"> {studentCnt} </h2>
                            <h4 className="col-md-8 pt-4 "> Total <br></br> Student</h4>

                        </div>
                    </div>

                </div>
            </div>






            <h4 className="py-2 text-info">All Users</h4>
            <table className="table table-hover" >
                {/* <table className="table table-borderless"> */}

                <thead>
                    <tr className="bg-info text-light">
                        <th className="text-light " scope="col">Sr. No</th>
                        <th className="text-light " scope="col">Name</th>
                        <th className="text-light" scope="col">Email</th>
                        <th className="text-light" scope="col">Phone</th>
                        <th className="text-light" scope="col">Gender</th>
                        <th className="text-light" scope="col">Role</th>
                    </tr>
                </thead>

                <tbody className="text-none">
                    {
                        clients.map((clients, index) =>
                            <tr className="table-warning " >

                                <td className="  "> {index + 1}</td>

                                {
                                    clients.role === "Teacher" ?
                                        <td className="bg-danger text-light "> {clients.name}</td>
                                        :
                                        <td className="text-dark bg-success"> {clients.name}</td>



                                }
                                {
                                    clients.role === "Teacher" ?
                                        <td className="bg-danger text-light"> {clients.mail}</td>
                                        :
                                        <td className="text-dark bg-success"> {clients.mail}</td>



                                }
                                {
                                    clients.role === "Teacher" ?
                                        <td className="bg-danger text-light"> {clients.phone}</td>
                                        :
                                        <td className="text-dark bg-success"> {clients.phone}</td>



                                }
                                {
                                    clients.role === "Teacher" ?
                                        <td className="bg-danger text-light"> {clients.gender}</td>
                                        :
                                        <td className="text-dark bg-success"> {clients.gender}</td>



                                }
                                {
                                    clients.role === "Teacher" ?
                                        <td className="bg-danger text-light"> {clients.role}</td>
                                        :
                                        <td className="text-dark bg-success"> {clients.role}</td>



                                }


                            </tr>

                        )
                    }
                </tbody>

            </table>
        </div>


    );
};

export default Clients;