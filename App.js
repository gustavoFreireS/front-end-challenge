import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/HEADER/Header.js';
import Showcase from './app/components/SHOWCASE/Showcase.js';
require('./app/assets/stylesheets/index.scss');

ReactDOM.render((
  <div>
  <Header/>
  <Showcase/>
  </div>
  ), document.getElementById('app')
);
