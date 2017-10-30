import React, {Component} from 'react';
import VideoContainer from './videoContainer.js';
require('../../assets/stylesheets/videoContainer.scss');


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
      <VideoContainer url='https://player.vimeo.com/video/148169535?api=1&player_id=vimeo_player&autoplay=1&loop=1&color=ffffff'/>
      </div>
    );
  }
}

export default Header;
