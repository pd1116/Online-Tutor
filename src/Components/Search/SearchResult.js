import React from 'react';
import { Card } from 'react-bootstrap';
import teacherimg from '../../images/teacherimg.jpg'

const SearchResult = ({ info }) => {
    console.log(info);
    return (
   

            <div className=" col-md-4 ">
             <Card className="techers_card py-3 mx-auto m-5 w-50">

<Card.Body className="row">
    {/* <Card.Title>{info.name} just Accept Your Request</Card.Title> */}

    <div className="col-md-8">
        <Card.Text className="card_text">
            {/* <p className="text-success w-50"><b> ID: </b> {info.id}</p> */}
            <p><b> Name: </b> {info.name} </p>
            <p><b> Medium: </b> {info.medium} </p>
            <p><b> Subject: </b> {info.subject} </p>
            <p><b> Class: </b> {info.subject} </p>
            <p><b> Salary: </b> {info.salary} </p>
            <p><b> Location: </b> {info.location} </p>





        </Card.Text>
    </div>
    <div className="col-md-4">
        <img className="cardimg mx-auto d-block" variant="top" src={teacherimg} alt="" />



    </div>



</Card.Body>
</Card>

               

            </div>
     
    );
};

export default SearchResult;