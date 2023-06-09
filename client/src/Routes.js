import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './user/Signin';

const page = () => {
    return (
        <h1>Hello</h1>
    )
}




const SaccoRoute = () => {
    return(
            <Routes>
              <Route path="/signin" element={<Signin/>} />
            </Routes>
    )
}

export default SaccoRoute;