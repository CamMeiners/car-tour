import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Car from './Car';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>
);
reportWebVitals();
