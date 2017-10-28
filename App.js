import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/HEADER/Header.js';
import Showcase from './app/components/SHOWCASE/Showcase.js';
import Chamadas from './app/components/CHAMADAS/Chamadas.js';
import Versions from './app/components/VERSOES/Versions.js';
import Carros from './app/components/CARROS/Carros.js';
import Footer from './app/components/FOOTER/Footer.js';
require('./app/assets/stylesheets/index.scss');

ReactDOM.render((
  <div className='root'>
  <Header/>
  <Showcase/>
  <Chamadas/>
  <Versions/>
  <Carros/>
  <Footer/>
  </div>
  ), document.getElementById('app')
);
