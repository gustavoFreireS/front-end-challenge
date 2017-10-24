import React, {Component} from 'react';
import VideoContainer from './videoContainer.js';
import Nav from './Nav.js';
require('../../assets/stylesheets/videoContainer.scss');

/**
 * Componente usado para mostrar um vídeo do vimeo em loop responsivamente em desktops
 * Recebe a url do embed video como parâmetro"
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      <Nav/>
      <VideoContainer url='https://player.vimeo.com/video/148169535?autoplay=1&loop=1&title=0&byline=0&portrait=0'/>

      </div>
    );
  }
}

export default Header;
