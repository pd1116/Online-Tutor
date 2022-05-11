import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbars from '../Navbars/Navbars';
import './Search.css'
import SearchResult from './SearchResult';


const SearchData = [
    {
        name: "Nayeem Zaman",
        medium: "Bangla",
        subject: "  Bangla",
        class: "Six-Eight",
        salary: "2000-5000",
        location: "Dhanmondi"




    },
    {
        name: "Payel Kabir",
        medium: "English",
        subject: "  English",
        class: "Nine-Ten",
        salary: "5000-10000",
        location: "Mirpur"

    },
    {
        name: "Shahriar Mahmud",
        medium: "English",
        subject: "  Math",
        class: "Eleven-Twelve",
        salary: "10000-15000",
        location: "Bashundhara"
    }
]








const Search = () => {
    return (
        <div className="search_tutor">
            <Navbars></Navbars>

            <div className="row pt-5 ">
                <div className=" col-md-7 ">


                    <form role="form" method="post" action>
                        <h2 className="text-center">Search Tutor</h2>
                        {/* select medium  */}
                        <div className="select_class">
                            <label>Select Medium: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option selected>None</option>
                                <option value="Bangla">Bangla</option>
                                <option value="English">English</option>
                            </select>
                        </div>

                        <div className="select_subject">
                            <label>Select Subject: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option value="Bangla">Bangla</option>
                                <option value="English">English</option>
                                <option value="Math">Math</option>
                                <option value="General Science"> General Science</option>
                                <option value="ICT"> ICT</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="Math">Physics</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Social Science">Social Science</option>
                                <option value="Religion">Religion</option>
                                <option value="Higher Math">Higher Math</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Finance">Finance</option>
                            </select>
                        </div>


                        {/* select class */}
                        <div className="select_class">
                            <label>Select Class: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option value="One-Three">None</option>
                                <option value="One-Three">One-Three</option>
                                <option value="Four-Five">Four-Five</option>
                                <option value="Six-Eight">Six-Eight</option>
                                <option value="Nine-Ten">Nine-Ten</option>
                                <option value="Eleven-Twelve">Eleven-Twelve</option>
                            </select>
                        </div>
                        {/* select range*/}
                        <div className="select_class">
                            <label> Salary Range: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option value="1000-2000">1000-2000</option>
                                <option value="2000-5000">2000-5000</option>
                                <option value="5000-10000">5000-10000</option>
                                <option value="10000-15000">10000-15000</option>


                            </select>

                        </div>

                        {/* select location */}
                        <div class="form-group">
                            <label for="location" class="col-sm-3 control-label">location</label>
                            <div class="">
                                <input type="location" id="location" placeholder="e.g: Mirpur 2, Dhaka" className="form-control" />
                            </div>
                        </div>


                        {/* <input type="submit" value="Search" className="btn btn-success my-3 w-100" /> */}

                        <Link to='/searchresult' className="btn btn-success my-3 w-100">Search</Link>

                        {/* <SearchIcon></SearchIcon> */}
                    </form>

                </div>


            </div>




            {/* passing search results to array */}
            <div className="row">
                {

                    SearchData.map(info => <SearchResult info={info}></SearchResult>)
                }
            </div>




        </div>
    );
};

export default Search;