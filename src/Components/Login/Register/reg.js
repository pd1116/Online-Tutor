import { Typography, TextField, Button, CircularProgress, Alert, FormLabel, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
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
    const handleSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password)
        // const formData = new FormData();
        // formData.append('name', loginData.name);
        // formData.append('mail', loginData.email);
        // formData.append('pass', loginData.password);
        // formData.append('gender', loginData.gender);
        // formData.append('role', loginData.role);
        // console.log(loginData);
        // console.log(formData);
        console.log(loginData);
        if (loginData.role === 'Student') {
            fetch('http://localhost:4000/addStudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))

        }
        else {
            fetch('http://localhost:4000/addTeacher', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(e)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert("bata");
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
                    <form className='login-form' onSubmit={handleSubmit}>
                        <input type="text" name="firstName" onBlur={handleOnBlur} placeholder="First Name" required />
                        <br />
                        <input className='' name="lastName" onBlur={handleOnBlur} placeholder="Last Name" required />
                        <br />
                        <input className='' name="email" onBlur={handleOnBlur} placeholder="Email" required />
                        <br />
                        <input className='password' type="password" name="password" onBlur={handleOnBlur} placeholder="Password" required />
                        <br />
                        <button className=' registerBtn' type='submit'>Register</button>
                        <br />
                        {/* <button className=' loginBtn' onClick={() => { props.setIsLoginPage(true) }}>Log In</button> */}
                    </form>
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