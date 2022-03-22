import React from 'react';
import TeacherNavbar from '../../Pages/Teacher/TeacherNavbar/TeacherNavbar';
import Header from '../Header/Header';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from '../Footer/Footer';

const Posts = () => {
    return (
        <div>
            <Header></Header>
            <TeacherNavbar></TeacherNavbar>
            <div className="row teacher update ">
                <div className="col-md-9 bg-info w-50" >
                    <h5>Update Tutor info</h5>

                    <div className="row">
                        <div className="col-md-3">
                            <h5>Medium</h5>

                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Bangla" />
                            </FormGroup>


                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" English" />
                            </FormGroup>


                        </div>
                    </div>
                    {/* subject  */}
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Subjects</h5>

                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Bangla" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Math" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" General Science" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" ICT" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Chemistry" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Biology" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Echonomics" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" ComputerScience" />

                            </FormGroup>

                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" English" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Math" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Social Science" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Religion" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Physics" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Higher Math" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Accounting" />
                                <FormControlLabel className="mx-2 " control={<Checkbox defaultChecked />} label=" Finance" />
                            </FormGroup>

                        </div>



                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h5>Class</h5>

                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" One-Three" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" SIx - Seven" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label="Nine -Ten" />
                            </FormGroup>


                        </div>
                        <div className="col-md-3">
                            <FormGroup>
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label="Four - Five" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Eight" />
                                <FormControlLabel className="mx-2" control={<Checkbox defaultChecked />} label=" Eleven-twelve" />
                            </FormGroup>


                        </div>
                    </div>
                    {/* salary  */}
                    <div className="row  pt-5 ">
                        <div className="col-md-3">

                            <div class="form-check">
                            <h5>Salary Range</h5>
                              
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="form-check ">
                                <select class="form-control" aria-label="Default select example">
                                    <option selected>None</option>
                                    <option value="1">1000-2000</option>
                                    <option value="2">2000-5000</option>
                                    <option value="3">5000-10000</option>
                                    <option value="3">10000-15000</option>


                                </select>

                            </div>


                        </div>


                    </div>
                     {/* //location */}
                <div className="row  pt-5 pb-5">
                    <div className="col-md-3">
                   
                    <div class="form-check">
                          <h3 className="pt-">Location</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-check">
                          
                            <div class="">
                                <input type="location" id="location" placeholder="e.g: Mirpur 2, Dhaka" className="form-control" />
                            </div>
                        </div>
                        

                    </div>
                    

                </div>




                </div>
                <div className="col-md-3">

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Posts;