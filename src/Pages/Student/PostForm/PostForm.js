import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';


import useAuth from '../../../Components/Login/FirebaseConfig/useAuth'

import post from '../../../images/post.png'

import StudentNavbar from '../StudentNavbar/StudentNavbar';
import swal from 'sweetalert';




const  PostForm = () => {



    const [loginData, setLoginData] = useState({});

    const { user, registerUser, Loading, authError } = useAuth();

// console.log(user.email);
    const handleOnBlur = e => {
        // console.log(e);
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
   
    const handleLoginSubmit = e => {
        console.log("mydata",loginData);
        registerUser(loginData.email, loginData.password, loginData.name)
           fetch('http://localhost:4000/PostForm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())
                
                .then(data => setLoginData( data))
                .catch(err => console.log(err))

        
        e.preventDefault();
    }


     

const popUp = () => {
        swal({
            title: "You have Successfully Posted!",
            text: " ",
            icon: "success",
            button: "OK",
        });
    }


    return (


        <div className="register">
             <StudentNavbar></StudentNavbar>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>Post Form</Typography>
                    {!Loading && <form onSubmit={handleLoginSubmit}>
                    <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            value ={user.email}
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                           />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Phone Number"
                            name="phone"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Institute"
                            name="institute"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Location"
                            name="location"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <div className="Medium pt-2">
                            <div onBlur={handleOnBlur}>
                                <label className="mx-2" >Medium</label>
                                <input className="mx-1" type="radio" value="Bangla" name="medium" /> Bangla
                                <input className="mx-1" type="radio" value="English" name="medium" /> English
                            </div>
                        </div>


                        <div class="form-group w-75 mx-auto p-2 " onBlur={handleOnBlur}>
                            <label className="mx-2" >Class</label>
                            <select class="form-control p-3" name="class" aria-label="Default select example">
                               
                                <option value="Not set" disabled={true}>Select Class</option>
                                <option value="One-Three">One-Three</option>
                                <option value="Four-Five">Four-Five</option>
                                <option value="Six-Eight">Six-Eight</option>
                                <option value="Nine-Ten">Nine-Ten</option>
                                <option value="Eleven-Twelve">Eleven-Twelve</option>
                            </select>

                        </div>
                        <div class="form-group w-75 mx-auto p-2 " onBlur={handleOnBlur}>
                            <label className="mx-2" >Select salary</label>
                            <select class="form-control p-3" name="salary" aria-label="Default select example">
                               
                                <option value="Not set" disabled={true}>Select salary</option>
                                <option value="1000-2000">1000-2000</option>
                                <option value="2000-5000">2000-5000</option>
                                <option value="5000-10000">5000-10000</option>
                                <option value="10000-15000">10000-15000</option>
                            </select>

                        </div>
                        <div class="form-group w-75 mx-auto p-2 " onBlur={handleOnBlur}>
                            <label className="mx-2" >Select Subject</label>
                            <select class="form-control p-3" name="subject" aria-label="Default select example">
                               
                                <option value="Not set" disabled={true}>Select Subject</option>
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



                        <Button onClick={popUp} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Post Your Form</Button>
                        
                    </form>}
                    {
                        Loading && <CircularProgress />
                    }


                    

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={post} alt="" />
                </Grid>
            </Grid>
        </div>

    );
};

export default PostForm;