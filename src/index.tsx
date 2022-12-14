import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/reset.css';
import 'antd/dist/antd.min.css';
import 'lib-flexible'

import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import AppRouter from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <AppRouter />
  </Router>
);