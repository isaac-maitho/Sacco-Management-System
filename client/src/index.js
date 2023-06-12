import React from 'react';
import ReactDOM from 'react-dom';
import SaccoRoute from "./Routes";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './Store'


ReactDOM.render(
        <Provider store={store}>
          <SaccoRoute/>
        </Provider>
    ,
    document.getElementById('root')
);