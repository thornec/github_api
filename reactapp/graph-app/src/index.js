import React from 'react';
import App from './components/App';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import 'semantic-ui-css/semantic.min.css';


render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));