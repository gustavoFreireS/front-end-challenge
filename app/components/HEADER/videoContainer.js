import React, {Component} from 'react';
require('../../assets/stylesheets/videoContainer.scss');

/**
 * Componente usado para mostrar um vídeo do vimeo em loop responsivamente em desktops
 * Recebe a url do embed video como parâmetro"
 */
class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(window.innerHeight);
    return (
      <div className='wrap-div'>
      <div className='container-video'>
        <iframe className='vimeoXtra' src={this.props.url} width='100%' height={window.innerHeight + 251} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    </div>
    );
  }
}

export default VideoContainer;
