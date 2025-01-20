import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the change here
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Use createRoot

root.render(
  <Router>
    <App />
  </Router>
);
