import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/HEADER/Header.js';
require('./app/assets/stylesheets/index.scss');

ReactDOM.render((
  <Header/>
  ), document.getElementById('app')
);
