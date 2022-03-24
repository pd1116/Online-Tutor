import React from 'react';
import Modal from 'react-modal';
import {  Grid, TextField, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

import './StudentUpdate.css';
import { FormLabel, FormControl } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


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
const StudentUpdate = ({ modalIsOpen2, closeModal2 }) => {
    // const StudentUpdate = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     console.log(value);

    // }
    const StudentUpdateSubmit = e => {
        const value = e.target.value;
        console.log(value);

        e.prevent();
    }


    return (
        <div >

            <Modal

                isOpen={modalIsOpen2}

                onRequestClose={closeModal2}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row ">
                    <div className="col-md-10  ">
                        <Typography className="text-center " variant="body1" gutterBottom>     <h5>Update Student info</h5></Typography>


                    </div>
                    <div className="col-md-2 text-center  ">
                        <button type="button" className=" btn btn-outline-danger " onClick={closeModal2}>x</button>
                    </div>
                </div>
                <Grid container spacing={2}>

                    <Grid item sx={{ mt: 2 }} xs={12} md={12}>

                        <form nSubmit={StudentUpdateSubmit}>
                            <div className="row   ">
                                <div className="col-12 w-70" >

                                    <Grid item sx={{ mt: 5 }} xs={12} md={12}>


                                        <TextField
                                            sx={{ width: '75%', m: 1 }}
                                            id="standard-basic"
                                            label="Your Name"
                                            name="name"
                                            // onBlur={handleOnBlur}
                                            variant="standard" />
                                       
                                        <FormControl>

                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group">
                                                <FormLabel id="demo-row-radio-buttons-group-label " sx={{ width: '20%', m: 2 }} >Gender</FormLabel>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />

                                            </RadioGroup>
                                        </FormControl>

                                        <br />

                                        <div class="form-check p-2 w-50">

                                            <div class="">
                                                <h6>Phone Number</h6>  <input type="text" id="phone" placeholder="Enter Your Number" className="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-check p-2 w-50">

                                            <div class="">
                                                <h6>Institute:</h6>  <input type="text" id="institute" placeholder="school/college" className="form-control" />
                                            </div>
                                        </div>
                                        <div class="form-check p-2 w-50">

                                            <div class="">
                                                <h6>Location:</h6>  <input type="location" id="location" placeholder="eg:  Mirpur 2, Dhaka" className="form-control" />
                                            </div>
                                        </div>







                                    </Grid>


                                    {/* //location */}
                                    <div className="row  pt-3 pb-3">
                                        <div className="col-md-3">


                                        </div>
                                        <div className="col-md-3">


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

export default StudentUpdate;