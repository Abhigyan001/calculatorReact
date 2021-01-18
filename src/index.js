/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewApp from './components/NewApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <NewApp />
  </BrowserRouter>,
  document.getElementById('root'),
);
