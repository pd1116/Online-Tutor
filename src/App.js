import './App.css';
import React from 'react';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Register from './Components/Login/Register/Register';

import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Components/Login/FirebaseConfig/AuthProvider';
import Login from './Components/Login/Login';
import AllRes from './Components/UsefullinfoDetails/AllRes';
import Qus1 from './Components/UsefullinfoDetails/Qus1';
import Qus2 from './Components/UsefullinfoDetails/Qus2';
import Qus3 from './Components/UsefullinfoDetails/Qus3';
import Qus4 from './Components/UsefullinfoDetails/Qus4';
import Qus5 from './Components/UsefullinfoDetails/Qus5';
import Qus6 from './Components/UsefullinfoDetails/Qus6';
import Qus7 from './Components/UsefullinfoDetails/Qus7';
import Qus8 from './Components/UsefullinfoDetails/Qus8';
import Qus9 from './Components/UsefullinfoDetails/Qus9';
import Contact from './Components/Contact/Contact';
import OurTutorInfo from './Components/OurTutor/OurTutorInfo';
import TeacherProfile from './Pages/Teacher/TeacherProfile/TeacherProfile';

import TeacherMain from './Pages/Teacher/TeacherMain/TeacherMain';

import StudentMain from './Pages/Student/StudentMain/StudentMain';
import StudentProfile from './Pages/Student/StudentProfile/StudentProfile';

import PostForm from './Pages/Student/PostForm/PostForm';
import TeacherNewsfeed from './Pages/Teacher/TeacherNewsfeed/TeacherNewsfeed';
import TeacherNotification from './Pages/Teacher/TeacherNotification/TeacherNotification';
import Notification from './Pages/Student/Notification/Notification';
import Newsfeed from './Pages/Student/Newsfeed/Newsfeed';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import StudentDetails from './Components/Admin/StudentDetails/StudentDetails';
import TeacherDetails from './Components/Admin/TeacherDetails/TeacherDetails';
import Payments from './Components/Admin/Payments/Payments';
import Teacherpayments from './Pages/Teacher/Teacherpayments/Teacherpayments';
import SearchResult from './Components/Search/SearchResult';

function App() {
  // const {user } = useAuth();

  return (
    <div className="App">
      

      <AuthProvider>
      
      {/* <p>user: {user.email} </p>  */}
        <Router>
        
          <Switch>
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Route path="/home">
              <Main></Main>
            </Route>
            <Route path="/search">
              <Search></Search>
            </Route>
            <Route path="/searchresult">
              <SearchResult></SearchResult>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/postform">
             <PostForm></PostForm>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>


            {/* all resource */}
            <Route path="/res">
              <AllRes></AllRes>
            </Route>
            <Route path="/qus1">
              <Qus1></Qus1>
            </Route>
            <Route path="/qus2">

          <Qus2></Qus2>
            </Route>
            <Route path="/qus3">
              <Qus3></Qus3>
            </Route>
            <Route path="/qus4">
              <Qus4></Qus4>
            </Route>
            <Route path="/qus5">
              <Qus5></Qus5>
            </Route>
            <Route path="/qus6">
              <Qus6></Qus6>
            </Route>
            <Route path="/qus7">
              <Qus7></Qus7>
            </Route>
            <Route path="/qus8">
              <Qus8></Qus8>
            </Route>
            <Route path="/qus9">
              <Qus9></Qus9>
            </Route>
            <Route path="/review">
              <OurTutorInfo></OurTutorInfo>
            </Route>


          {/* teacher section */}


          <PrivateRoute path="/teachermain">
              <TeacherMain></TeacherMain>
            </PrivateRoute>
            <Route path="/teacherprofile">
             <TeacherProfile></TeacherProfile>
            </Route>
            <Route path="/teachernotification">
             <TeacherNotification></TeacherNotification>
            </Route>
            <Route path="/techernewsfeed">
            <TeacherNewsfeed></TeacherNewsfeed>
            </Route>
            <Route path="/teacherpayments">
            <Teacherpayments></Teacherpayments>
            </Route>


            {/* Student section  */}
          <PrivateRoute path="/studentmain">
              <StudentMain></StudentMain>
            </PrivateRoute>
            <Route path="/studentprofile">
             <StudentProfile></StudentProfile>
            </Route>
            <Route path="/studentnotification">
             <Notification></Notification>
            </Route>
            <Route path="/studentnewsfeed">
            <Newsfeed></Newsfeed>
            </Route>


            {/* admin part */}
            <Route path="/dashboard">
            <Dashboard></Dashboard>
            </Route>
            <Route path="/studentdetails">
            <StudentDetails></StudentDetails>
            </Route>
            <Route path="/teacherdetails">
            <TeacherDetails></TeacherDetails>
            </Route>
            <Route path="/payments">
            <Payments></Payments>
            </Route>




          </Switch>
        </Router>




      </AuthProvider>



    </div>
  );
}

export default App;
