import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header
      background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
      title="SoyLcc"
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

