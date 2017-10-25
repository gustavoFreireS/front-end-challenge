import React, {Component} from 'react';
import Isca from './Isca.js';
require('../../assets/stylesheets/showcaseContainer.scss');

/**
 * Componente usado para mostrar um vídeo do vimeo em loop responsivamente em desktops
 * Recebe a url do embed video como parâmetro"
 */
class ShowcaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(window.innerHeight);
    return (
      <div className='root-container'>
        <Isca/>
    </div>
    );
  }
}

export default ShowcaseContainer;
