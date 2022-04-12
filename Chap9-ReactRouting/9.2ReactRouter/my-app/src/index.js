import React from 'react';
import {createRoot} from 'react-dom/client';
import './9.2ReactRouter/index.css';
import './9.2ReactRouter/Stylesheets/bootstrap.css';
import App from './9.2ReactRouter/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);



