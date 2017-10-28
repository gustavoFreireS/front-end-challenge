import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/HEADER/Header.js';
import Showcase from './app/components/SHOWCASE/Showcase.js';
import Chamadas from './app/components/CHAMADAS/Chamadas.js';
import Versions from './app/components/VERSOES/Versions.js';
import Carros from './app/components/CARROS/Carros.js';
require('./app/assets/stylesheets/index.scss');

ReactDOM.render((
  <div>
  <Header/>
  <Showcase/>
  <Chamadas/>
  <Versions/>
  <Carros/>

  </div>
  ), document.getElementById('app')
);
