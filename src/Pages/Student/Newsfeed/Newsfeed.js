import React from 'react';
import './Newsfeed.css';
import { Card } from 'react-bootstrap';
const Newsfeed = () => {
    return (
        <div>

            <div className="row">
                <div className="col-md-6">
                    <Card className="techers_card   my-5 py-3 w-70">
                    <img className="cardimg mx-auto d-block" variant="top" src="" alt="" />

                        <Card.Body>
                           
                            <Card.Text className="card_text">
                                <p><b> Name: </b> { }</p>
                                <p><b> Subject:  </b>{ }</p>
                                <p><b> Class: </b>{ }</p>
                                <p><b> Medium: </b>{ }</p>
                                <p><b> Salary: </b>{ }</p>
                                <p><b> Location: </b>{ }</p>
                                <p><b> Institute: </b>{ }</p>




                            </Card.Text>
                            <button className='btn btn-success w-50'>apply</button>

                          

                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Newsfeed;