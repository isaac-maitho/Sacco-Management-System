import React from 'react';
import ReactDOM from 'react-dom';
import SaccoRoute from "./Routes";
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux'
//import store from './store'


ReactDOM.render(
    <BrowserRouter>
        <SaccoRoute/>
    </BrowserRouter>
    ,
    document.getElementById('root')
);