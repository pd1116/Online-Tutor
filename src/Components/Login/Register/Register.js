import { Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';


import useAuth from '../../../Components/Login/FirebaseConfig/useAuth'

import register from '../../../images/register.webp'
import Navbars from '../../Navbars/Navbars';






const Register = () => {



    const [loginData, setLoginData] = useState({});

    const { user, registerUser, Loading, authError } = useAuth();


    const handleOnBlur = e => {
        // console.log(e);
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name)
     
        console.log(loginData);
        if (loginData.role === 'Student') {
           
            fetch('http://localhost:4000/StudentData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())
                .then(data => console.log("my std data",data))
                .catch(err => console.log(err))

        }
        else {
           
            fetch('http://localhost:4000/TeacherData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())
                .then(data => {
                    if(data){ 
                        alert("ok calm");
                    }
                })
                .catch(err => console.log(err))
        }

        e.preventDefault();
    }
    return (


        <div className="register">
            <Navbars></Navbars>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
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
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <div className="Gender pt-2">
                            <div onBlur={handleOnBlur}>
                                <label className="mx-2" >Gender</label>
                                <input className="mx-1" type="radio" value="Male" name="gender" /> Male
                                <input className="mx-1" type="radio" value="Female" name="gender" /> Female
                            </div>
                        </div>
                        <div className="Role py-2">
                            <div onBlur={handleOnBlur}>
                                <label className="mx-2" >Log in As a</label>
                                <input className="mx-1" type="radio" value="Teacher" name="role" /> Teacher
                                <input className="mx-1" type="radio" value="Student" name="role" /> Student
                            </div>
                        </div>



                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        Loading && <CircularProgress />
                    }


                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={register} alt="" />
                </Grid>
            </Grid>
        </div>

    );
};

export default Register;