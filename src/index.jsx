import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/style.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
