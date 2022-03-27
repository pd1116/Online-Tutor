// import React, { useState } from 'react';

// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

// import { Button, TextField } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import swal from 'sweetalert';

// import Header from '../../../Components/Header/Header';
 
// import StudentNavbar from '../StudentNavbar/StudentNavbar';
// import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
// import Footer from '../../../Components/Footer/Footer';


//     const handleOnBlur = e => {
       
//     }
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
//         alert("working");

//     }
//     return (
//         <div>
//             <Header></Header>
//            <StudentNavbar></StudentNavbar>
//             <div className="row teacher update ">
//                 <div className="col-md-9 bg-info w-50" >
//                     <h5>Post Form</h5>
//                     <form onSubmit={handleLoginSubmit}>
//                         <div className="row">
//                             <div className="col-md-3">
//                                 <h5>Medium</h5>

//                             </div>
//                             <div className="col-md-3">
//                             <div className="Gender pt-2">
//                             <div onBlur={handleOnBlur}>
//                                 <label className="mx-2" >Gender</label>
//                                 <input className="mx-1" type="radio" value="Male" name="gender" /> Male
//                                 <input className="mx-1" type="radio" value="Female" name="gender" /> Female
//                             </div>
//                         </div>

//                             </div>
//                             <div className="col-md-3">
//                                 <FormGroup>
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" English" />
//                                 </FormGroup>


//                             </div>
//                         </div>
//                         {/* subject  */}
//                         <div className="row">
//                             <div className="col-md-3">
//                                 <h5>Subjects</h5>

//                             </div>
//                             <div className="col-md-3">
//                                 <FormGroup>
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Bangla" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Math" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" General Science" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" ICT" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Chemistry" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Biology" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Echonomics" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" ComputerScience" />

//                                 </FormGroup>

//                             </div>
//                             <div className="col-md-3">
//                                 <FormGroup>
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" English" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Math" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Social Science" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Religion" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Physics" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Higher Math" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Accounting" />
//                                     <FormControlLabel className="mx-2 " control={<Checkbox />} label=" Finance" />
//                                 </FormGroup>

//                             </div>



//                         </div>

//                         <div className="row">
//                             <div className="col-md-3">
//                                 <h5>Class</h5>

//                             </div>
//                             <div className="col-md-3">
//                                 <FormGroup>
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" One-Three" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" SIx - Seven" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label="Nine -Ten" />
//                                 </FormGroup>


//                             </div>
//                             <div className="col-md-3">
//                                 <FormGroup>
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label="Four - Five" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Eight" />
//                                     <FormControlLabel className="mx-2" control={<Checkbox />} label=" Eleven-twelve" />
//                                 </FormGroup>


//                             </div>
//                         </div>
//                         {/* salary  */}
//                         <div className="row  pt-5 ">
//                             <div className="col-md-3">

//                                 <div class="form-check">
//                                     <h5>Salary Range</h5>

//                                 </div>
//                             </div>
//                             <div className="col-md-3">
//                                 <div class="form-check ">
//                                     <select class="form-control" aria-label="Default select example">
//                                         <option selected>None</option>
//                                         <option value="1">1000-2000</option>
//                                         <option value="2">2000-5000</option>
//                                         <option value="3">5000-10000</option>
//                                         <option value="3">10000-15000</option>


//                                     </select>

//                                 </div>


//                             </div>


//                         </div>
//                         {/* //location */}
//                         <div className="row  pt-5 pb-5">
//                             <div className="col-md-3">

//                                 <div class="form-check">
//                                     <h3 className="pt-">Location</h3>
//                                 </div>
//                             </div>
//                             <div className="col-md-3">
//                                 <div class="form-check">

//                                     <div class="">
                                        
//                                         <TextField
//                                         sx={{ width: '100%', m: 1 }}
//                                         id="standard-basic"
//                                         label="Insert Your location"
//                                         name="location"
//                                         onBlur={handleOnBlur}
//                                         variant="standard" 
//                                         className="form-control" 
//                                         />
//                                     </div>
                                   
//                                 </div>


//                             </div>


//                         </div>
//                         <Button onClick={popUp} sx={{ width: '50%', m: 1 }} type="submit" variant="contained"><SendIcon className="mx-x m-2" ></SendIcon>  Post</Button>

//                     </form>

//                 </div>

//             </div>
//             <Footer></Footer>

//         </div>
//     );
// };

// export default PostForm;