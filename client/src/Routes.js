import React from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Signin from './user/Signin';
import Signup from "./user/Signup";
import AdminDashboard from "./user/AdminDashboard";
import ListMembers from "./admin/register/ListMembers";
import RegisterMembers from "./admin/register/RegisterMembers";
import Loans from "./pages/Loans";
import Savings from "./pages/Savings";
import Profile from "./pages/Profile";

const page = () => {
    return (
        <h1>Hello</h1>
    )
}




const SaccoRoute = () => {

    const userLogin = useSelector((state) => state.userLogin)
   // const { userInfo } = userLogin
  
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/" element={<AdminDashboard/>} />
              <Route path="/add-member" element={<RegisterMembers/>} />
              <Route path="/list-members" element={<ListMembers/>} />
              <Route path="/loans" element={<Loans/>} />
              <Route path="/savings" element={<Savings/>} />
              <Route path="/profile/:userId" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default SaccoRoute;