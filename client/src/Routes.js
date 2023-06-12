import React from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from "./user/Signup";
import AdminDashboard from "./user/AdminDashboard";

const page = () => {
    return (
        <h1>Hello</h1>
    )
}




const SaccoRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/" element={<AdminDashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default SaccoRoute;