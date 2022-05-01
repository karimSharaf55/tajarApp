import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './css/bootstrap.min.css'
import MainRoutes from '../src/components/MainRoutes';
import './css/font-awesome.min.css'
import './css/style.css'
import './css/responsive.css'

ReactDOM.render(
    <BrowserRouter>
        <MainRoutes/>
    </BrowserRouter>
, document.getElementById('root'));

