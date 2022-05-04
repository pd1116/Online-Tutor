// import React from 'react';
// import Navbars from '../Navbars/Navbars';
// import {  Button} from '@mui/material';

// import SendIcon from '@mui/icons-material/Send';
// import swal from 'sweetalert';
// import './Post.css'
// import  { useState } from 'react';
// import useAuth from '../Login/FirebaseConfig/useAuth';

// const Post = () => {
//     const popUp = () => {
//         swal({
//             title: "Thanks for Your Informatino!",
//             text: "You have successfully posted.",
//             icon: "success",
//             button: "OK",
//         });
//     }

 
// const [loginData, setLoginData] = useState({});

//     const { user, registerUser, Loading, authError } = useAuth();
//     return (
//         <div className="">
//             <Navbars></Navbars>
           
//             <div className="container post_con">
//             <h1> Post Form</h1>
            
//                 <div className="row container pt-5 ">
              
//                     <div className="col-md-3">
//                         <div class="form-check">
//                           <h3 className="pt-">Subjects</h3>
//                         </div>

//                     </div>
                    
                    
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Bangla
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Math
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                               General Science
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                               ICT
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                               Chemistry
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Biology
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Echonomics
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Computer Science
//                             </label>
//                         </div>
                       
 
//                      </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                 English
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                 Social Science
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                 Religion
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                 Physics
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Higher Math
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Accounting
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Finance
//                             </label>
//                         </div>

//                     </div>

//                 </div>
//                 <div className="row container pt-5 ">
//                     <div className="col-md-3">
//                         <div class="form-check">
//                           <h3 className="">Class</h3>
//                         </div>

//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                               One -Three
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                              SIx - Seven
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                              Nine -Ten
//                             </label>
//                         </div>
                     
//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                 Four - Five
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Eight
//                             </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                Eleven-twelve
//                             </label>
//                         </div>

//                     </div>

//                 </div>
//                 {/* medium section */}
//                 <div className="row container pt-5 ">
//                     <div className="col-md-3">
//                         <div class="form-check">
//                           <h3 className="pt-">Medium</h3>
//                         </div>

//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                              Bangla
//                             </label>
//                         </div>
                        

//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                             <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
//                             <label class="form-check-label" for="flexCheckChecked">
//                                English
//                             </label>
//                         </div>

//                     </div>

//                 </div>

//               {/* Salary range */}
//                 <div className="row container pt-5 ">
//                     <div className="col-md-3">
                   
//                     <div class="form-check">
//                           <h3 className="pt-">Salary Range </h3>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
//                         <select class="form-control" aria-label="Default select example">
//                                 <option selected>None</option>
//                                 <option value="1">1000-2000</option>
//                                 <option value="2">2000-5000</option>
//                                 <option value="3">5000-10000</option>
//                                 <option value="3">10000-15000</option>


//                             </select>

//                         </div>
                        

//                     </div>
                    

//                 </div>
//                 {/* //location */}
//                 <div className="row container  pt-5 pb-5">
//                     <div className="col-md-3">
                   
//                     <div class="form-check">
//                           <h3 className="pt-">Location</h3>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div class="form-check">
                          
//                             <div class="">
//                                 <input type="location" id="location" placeholder="e.g: Mirpur 2, Dhaka" className="form-control" />
//                             </div>
//                         </div>
                        

//                     </div>
                    

//                 </div>
//                 <div class="form-group">
//                                     <div class="col-sm-offset-2 col-sm-10">
//                                         <Button onClick={popUp} sx={{ width: '50%', m: 1 }} type="submit" variant="contained"><SendIcon className="mx-x m-2" ></SendIcon>  Post</Button>

//                                     </div>
//                                 </div>
//             </div>
//         </div>
//     );
// };

// export default Post;