// import React, { useState } from 'react';
// import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
// import swal from 'sweetalert';
// import Header from '../../../Components/Header/Header';
// import StudentNavbar from '../StudentNavbar/StudentNavbar';
// import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
// import Footer from '../../../Components/Footer/Footer';

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';



// const popUp = () => {
//     swal({
//         title: "Thanks for Your Informatino!",
//         text: "You have successfully posted.",
//         icon: "success",
//         button: "OK",
//     });
// }


// const PostForm = () => {
//     const [loginData, setLoginData] = useState({});

//     const { user, registerUser, Loading, authError } = useAuth();


//     const handleOnBlur = e => {
//         // console.log(e);
//         const field = e.target.name;
//         const value = e.target.value;
//         const newLoginData = { ...loginData };
//         newLoginData[field] = value;
//         setLoginData(newLoginData);
//     }

//     const handleLoginSubmit = e => {
//         console.log("mydata",loginData);
//            fetch('http://localhost:4000/PostForm', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(loginData)
//             })
//                 .then(res => res.json())
 
//                 .then(data => setLoginData( data))
//                 .catch(err => console.log(err))

        
//         e.preventDefault();
//     }
//     return (
//         <div>
//             <Header></Header>
//             <StudentNavbar></StudentNavbar>
//             <Grid container spacing={2}>
//                 <Grid item sx={{ mt: 8 }} xs={12} md={6}>
//                     <Typography variant="body1" gutterBottom>Post Form</Typography>
//                     {!Loading && <form onSubmit={handleLoginSubmit}>
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Name"
//                             name="name"
//                             onBlur={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Email"
//                             name="email"
//                             type="email"
//                             onBlur={handleOnBlur}
//                             variant="standard" />

//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Phone Number"
//                             name="phone"
//                             onBlur={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Institute"
//                             name="institute"
//                             onBlur={handleOnBlur}
//                             variant="standard" />
//                         <TextField
//                             sx={{ width: '75%', m: 1 }}
//                             id="standard-basic"
//                             label="Your Location"
//                             name="location"
//                             onBlur={handleOnBlur}
//                             variant="standard" />


//                         <div className="Medium pt-2">
//                             <div onBlur={handleOnBlur}>
//                                 <label className="mx-2" >Medium</label>
//                                 <input className="mx-1" type="radio" value="Bangla" name="medium" /> Bangla
//                                 <input className="mx-1" type="radio" value="English" name="medium" /> English
//                             </div>
//                         </div>


//                         <div class="form-group w-75 mx-auto p-2 " onBlur={handleOnBlur}>
//                             <label className="mx-2" >Select salary</label>
//                             <select class="form-control p-3" name="salary" aria-label="Default select example">
                               
//                                 <option value="Not set" disabled={true}>Select salary</option>
//                                 <option value="1000-2000">1000-2000</option>
//                                 <option value="2000-5000">2000-5000</option>
//                                 <option value="5000-10000">5000-10000</option>
//                                 <option value="10000-15000">10000-15000</option>
//                             </select>

//                         </div>
//                         {/* <Box onBlur={handleOnBlur} className="mx-auto" sx={{ width: '75%', m: 1 }}>
//                             <FormControl fullWidth>

//                                 <InputLabel  >Select Class</InputLabel>
//                                 <Select

//                                     id="demo-simple-select"
//                                     name="class"
//                                     label="Class"

//                                 >
//                                     <MenuItem value="One-Three">One-Three</MenuItem>
//                                     <MenuItem value="Four-Five">Four-Five</MenuItem>
//                                     <MenuItem value="Six-Eight">Six-Eight</MenuItem>
//                                     <MenuItem value="Nine-Ten">Nine-Ten</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Box> */}




//                         <Button sx={{ width: '75%', m: 1 }} type="submit" onClick={popUp} variant="contained">Post your From</Button>

//                     </form>}
//                     {
//                         Loading && <CircularProgress />
//                     }


//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <img style={{ width: '100%' }} src="{register} " alt="" />
//                 </Grid>
//             </Grid>
//             <Footer></Footer>

//         </div>
//     );
// };

// export default PostForm;