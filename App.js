import React from 'react';
import ReactDOM from 'react-dom';
import Header from './app/components/HEADER/Header.js';
import Showcase from './app/components/SHOWCASE/Showcase.js';
import Chamadas from './app/components/CHAMADAS/Chamadas.js';
import Versions from './app/components/VERSOES/Versions.js';
import Carros from './app/components/CARROS/Carros.js';
import Footer from './app/components/FOOTER/Footer.js';
import Nav from './app/components/HEADER/Nav.js';
require('./app/assets/stylesheets/index.scss');

ReactDOM.render((
  <div className='root'>
  <Nav/>
  <div id='root'>
  <Header/>
  <Showcase/>
  <Chamadas/>
  <Versions/>
  <Carros/>
  <Footer/>
</div>
  </div>
  ), document.getElementById('app')
);
