import React from 'react';

import Navbars from '../Navbars/Navbars';
import './Search.css'




const Search = () => {
    return (
        <div className="search_tutor">
            <Navbars></Navbars>

            <div className="row pt-5 ">
                <div className=" col-md-7 ">


                    <form role= "form">
                        <h2 className="text-center">Search Tutor</h2>
                        {/* select medium  */}
                        <div className="select_class">
                            <label>Select Medium: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option selected>None</option>
                                <option value="bangla">Bangla Medium</option>
                                <option value="english">English  Medium</option>
                                <option value="full_english">English Version</option>
                                <option value="Arabic">Arabic</option>

                            </select>
                        </div>
                        <div className="select_subject">
                            <label>Select Subject: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option value=""> Any Class </option>
                                <option value="29082018089212"> Applications
                                </option>
                                <option value="29082018091602"> Database
                                </option>
                                <option value="29082018087349"> Networking
                                </option><option value="29082018088715"> Operating System
                                </option><option value="29082018085162"> Photo Editing
                                </option><option value="29082018092087"> Programming
                                </option><option value="29082018088262"> Web Design
                                </option><option value="29082018085575">
                                </option><option value="29082018091716"> Art/Drawing
                                </option><option value="29082018089128"> Instrument
                                </option><option value="29082018092158"> Music
                                </option><option value="29082018089171"> Others
                                </option><option value="29082018090325"> Exam(IELTS, TOFEL) </option>
                                <option value="29082018089620"> Foreign Language
                                </option><option value="5082014203400"> O Level </option><option value="5082014208720"> Standard I </option><option value="5082014211310"> Standard II </option><option value="5082014205520"> Standard III </option><option value="5082014205350"> Standard IV </option><option value="5082014207390"> Standard IX </option><option value="5082014207320"> Standard V </option><option value="5082014202790"> Standard VI </option><option value="5082014206420"> Standard VII </option><option value="5082014208830"> Standard VIII </option><option value="5082014202710"> Fazil </option><option value="5082014209660"> Kamil </option><option value="13112018123139"> Quran </option><option value="22112015137725"> Nursery </option><option value="5082014202990"> Class  VIII </option><option value="5082014204510"> Class I </option><option value="5082014210040"> Class II </option><option value="5082014204440"> Class III </option><option value="5082014204230"> Class IV </option><option value="5082014208630"> Class IX </option><option value="5082014209980"> Class V </option><option value="5082014202050"> Class VI </option><option value="5082014202200"> Class VII </option><option value="5082014201630"> Class X </option><option value="5082014202810"> H.S.C </option><option value="5082014204270"> S.S.C </option><option value="5082014211940"> A Level </option><option value="23112015031071"> Honors </option><option value="7062018076043"> Class I
                                </option><option value="7062018076638"> Class II
                                </option><option value="7062018077186"> Class III
                                </option><option value="7062018079825"> Class IV
                                </option><option value="7062018081807"> Class IX
                                </option><option value="7062018074989"> Class V
                                </option><option value="7062018078691"> Class VI
                                </option><option value="7062018077355"> Class VII
                                </option><option value="7062018073145"> Class VIII
                                </option><option value="7062018078080"> Class X
                                </option><option value="7062018076487"> Class XI (HSC)
                                </option><option value="7062018080288"> Class XII (HSC) </option>
                            </select>
                        </div>


                        {/* select class */}
                        <div className="select_class">
                            <label>Select Class: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option selected>None</option>
                                <option value="1">Class One</option>
                                <option value="2">Class Two</option>
                                <option value="3">Class Three</option>
                                <option value="4">Class Four</option>
                                <option value="5">Class Five</option>
                                <option value="6">Class Six</option>
                                <option value="7">Class Seven</option>
                                <option value="8">Class Eight</option>
                                <option value="9">Class Nine</option>
                                <option value="10">SSC</option>
                            </select>
                        </div>
                        {/* select range*/}
                        <div className="select_class">
                            <label> Salary Range: </label>
                            <select class="form-control" aria-label="Default select example">
                                <option selected>None</option>
                                <option value="1">1000-2000</option>
                                <option value="2">2000-5000</option>
                                <option value="3">5000-10000</option>
                                <option value="3">10000-15000</option>


                            </select>

                        </div>

                        {/* select location */}
                        <div class="form-group">
                            <label for="location" class="col-sm-3 control-label">Location</label>
                            <div class="">
                                <input type="location" id="location" placeholder="e.g: Mirpur 2, Dhaka" className="form-control" />
                            </div>
                        </div>


                        <input type="submit" value="Search" className="btn btn-success my-3 w-100" />

                        {/* <SearchIcon></SearchIcon> */}
                    </form>

                </div>
                {/* <div className="col-md-6">
                    <h3>result</h3>
                </div> */}

            </div>

        </div>
    );
};

export default Search;