import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import teacherimg from '../../images/teacherimg.jpg'
import Header from '../Header/Header';
import Navbars from '../Navbars/Navbars';
import SearchData from './SearchData.json';


// const SearchData = [
//     {
//         name: "Nayeem Zaman",
//         medium: "Bangla",
//         subject: "  Bangla",
//         class: "Six-Eight",
//         salary: "2000-5000",
//         location: "Dhanmondi"




//     },
//     {
//         name: "Payel Kabir",
//         medium: "English",
//         subject: "  English",
//         class: "Nine-Ten",
//         salary: "5000-10000",
//         location: "Mirpur"

//     },
//     {
//         name: "Shahriar Mahmud",
//         medium: "English",
//         subject: "  Math",
//         class: "Eleven-Twelve",
//         salary: "10000-15000",
//         location: "Bashundhara"
//     }
// ]


// console.log(SearchData);



const SearchResult = () => {

    const [search, setSearch] = useState('');
    const [search2, setSearch2] = useState([]);

    //searching work

    useEffect(() => {

        fetch('http://localhost:4000/Clients2?search=' + search)
            .then(res => res.json())

            .then(data => setSearch2(data))

    }, [search])

    console.log(  search2 );

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (


        <div className=" col-12  ">
            <Header></Header>
            <Navbars></Navbars>

            <h2 className="text-center">Search a Teacher</h2>

            <input className="form-control w-50 mx-auto my-2 mt-5" placeholder="search" type="text" onChange={handleChange}   />
             <button className="btn btn-outline-success">Search</button >
            <p>Searching.. {search}</p>
           

            {/* <input type="button" value="Search" /> */}



            <div className="row ">
                

                {
                    search2.map((info, index) =>
                   
                    info.role === "Teacher" ?
                        <Card className="techers_card py-3 px-5   w-50  ">

                            <Card.Body className="row">
                                {/* <Card.Title>just Accept Your Request</Card.Title> */}

                                <div className="col-md-8">
                                    <Card.Text className="card_text">

                                        <p><b> Id: </b> {info.id} </p>
                                        <p><b> Name: </b> {info.name} </p>
                                        <p><b> Email: </b> {info.mail} </p>
                                        <p><b> Phone: </b> {info.phone} </p>
                                        <p><b> Role: </b> {info.role} </p>
                                        <p><b> institute: </b> {info.institute} </p>
                                        <p><b> Gender: </b> {info.gender} </p>




                                    </Card.Text>
                                </div>
                                <div className="col-md-4">
                                    <img className="cardimg mx-auto d-block" variant="top" src={teacherimg} alt="" />



                                </div>



                            </Card.Body>
                        </Card>
                        :
                        <h3> </h3>







                    )
                }



            </div>






        </div>

    );
};

export default SearchResult;