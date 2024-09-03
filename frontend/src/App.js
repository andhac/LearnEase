import './App.css';
import './tailwind.css';
import React, {useEffect} from 'react';

//Component
import HomeHoc from './HOC/Home.HOC.jsx';
import HomePage from './pages/HomePage.jsx';
import Signin from './components/Auth/Signin.jsx';
import Courses from './components/Courses.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import VerifyOtp from "./components/Auth/VerifyOtp";
import AdminAuth from "./components/Admin/Auth/AdminAuth";
import {Route, Routes} from "react-router-dom";
import AdminHOC from "./HOC/Admin.HOC";
import DashboardPage from "./pages/DashboardPage";

//Redux
import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {fetchUser} from "./redux/slice/userSlice";
import Custom404 from "./components/NotFound";
import addCourse from "./components/Admin/Courses/addCourse";


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (Cookies.get('token')) {
            dispatch(fetchUser())
        }
    }, [dispatch]);
    return (
        <>
            <HomeHoc exact component={HomePage} path="/"/>
            <HomeHoc exact component={Signin} path='/login'/>
            <HomeHoc exact component={SignUp} path='/signUp'/>
            <HomeHoc exact component={Courses} path="/Courses"/>
            <HomeHoc exact component={VerifyOtp} path="/verify-otp"/>
            <Routes>
                <Route path="/Learn-Hub-admin" element={<AdminAuth/>}/>
                {/*<Route path='*' element={<Custom404/>}/>*/}
            </Routes>
            <AdminHOC exact component={DashboardPage} path="/admin/dashboard"/>
            <AdminHOC exact component={addCourse} path="/admin/add-course"/>

        </>
    );
}

export default App;
