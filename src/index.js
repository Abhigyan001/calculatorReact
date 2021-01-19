/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NewApp from './components/NewApp';

ReactDOM.render(
  <BrowserRouter>
    <NewApp />
  </BrowserRouter>,
  document.getElementById('root'),
);
