import React, {Component} from 'react';
import ShowcaseContainer from './ShowcaseContainer.js';
require('../../assets/stylesheets/showcase.scss');


/**
 * Componente usado para mostrar um vídeo do vimeo em loop responsivamente em desktops
 * Recebe a url do embed video como parâmetro"
 */
class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(window.innerHeight);
    return (
      <div className='root-showcase'>
        <ShowcaseContainer/>
    </div>
    );
  }
}

export default Showcase;
