import React from 'react';
import Modal from 'react-modal';
import { Button, Grid, TextField, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './TeacherUpdate.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const TeacherUpdate = ({ modalIsOpen2, closeModal2 }) => {
    const teacherUpdate = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value);

    }
    const TeacherUpdateSubmit = e => {
        const value = e.target.value;
        console.log(value);

        e.prevent();
    }


    return (
        <div >

            <Modal 
           
                isOpen={modalIsOpen2}

                onRequestClose={closeModal2}
               
                contentLabel="Example Modal"
            >
                <div className="row ">
                    <div className="col-md-10  ">
                        <Typography className="text-center " variant="body1" gutterBottom>     <h5>Update Tutor info</h5></Typography>


                    </div>
                    <div className="col-md-2 text-center  ">
                        <button type="button" className=" btn btn-outline-danger " onClick={closeModal2}>x</button>
                    </div>
                </div>
                <Grid  container  spacing={2}>

                    <Grid item sx={{ mt: 2 }} xs={12} md={12}>

                        <form  nSubmit={TeacherUpdateSubmit}>
                            <div className="row   ">
                                <div className="col-12 w-70" >


                                    <div className="row mb-3">
                                        <div className="col-md-3">
                                            <h5>Medium</h5>

                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Bangla" />
                                            </FormGroup>


                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" English" />
                                            </FormGroup>


                                        </div>
                                    </div>
                                    {/* subject  */}
                                    <div className="row mb-3">
                                        <div className="col-md-3">
                                            <h5>Subjects</h5>

                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Bangla" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Math" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" General Science" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" ICT" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Chemistry" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Biology" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Echonomics" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" ComputerScience" />

                                            </FormGroup>

                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" English" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Math" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Social Science" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Religion" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Physics" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Higher Math" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Accounting" />
                                                <FormControlLabel className="mx-2 " control={<Checkbox Checked />} label=" Finance" />
                                            </FormGroup>

                                        </div>



                                    </div>

                                    {/* class */}

                                    <div className="row ">
                                        <div className="col-md-3">
                                            <h5>Class</h5>

                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" One-Three" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" SIx - Seven" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label="Nine -Ten" />
                                            </FormGroup>


                                        </div>
                                        <div className="col-md-3">
                                            <FormGroup>
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label="Four - Five" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Eight" />
                                                <FormControlLabel className="mx-2" control={<Checkbox Checked />} label=" Eleven-twelve" />
                                            </FormGroup>


                                        </div>
                                    </div>
                                    {/* salary  */}
                                    <div className="row  pt-3 ">
                                        <div className="col-md-3">

                                            <div class="form-check">
                                                <h5>Salary Range</h5>

                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div class="form-check ">
                                                <select class="form-control" aria-label=" select example">
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
                                    <div className="row  pt-3 pb-3">
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

                                        <button className="btn btn-success d-flex mx-auto mb-2   " sx={{ width: '70%', my: 1 }} type="submit" >Update Information </button>

                               

                                </div>

                            </div>



                        </form>


                    </Grid>

                </Grid>





            </Modal>

        </div>
    );
};

export  default TeacherUpdate;