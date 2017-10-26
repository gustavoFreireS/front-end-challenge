import React, {Component} from 'react';
require('../../assets/stylesheets/chamadas.scss');

/**
 * Componente usado para mostrar um vídeo do vimeo em loop responsivamente em desktops e mostra uma imagem na versão mobile
 * Recebe a url do embed video como parâmetro"
 */
class Chamadas extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(window.innerHeight);
    return (
      <div className='root-calls'>
        <div className='container-calls'>
          <div className='container-text'>
            <h3 className='top-text'>Imperdível</h3>
            <h2 className='middle-text'>Taxa Zero %</h2>
            <p className='bottom-text'>Always first off the line. Instant torque delivers full power in a heartbeat.</p>
          </div>
          <div className='container-text'>
            <h3 className='top-text'>O carro mais</h3>
            <h2 className='middle-text'>seguro</h2>
            <p className='bottom-text'>Always first off the line. Instant torque delivers full power in a heartbeat.</p>
          </div>
          <div className='container-text'>
            <h3 className='top-text'>Bonus de até</h3>
            <h2 className='middle-text'>R$3mil</h2>
            <p className='bottom-text'>Always first off the line. Instant torque delivers full power in a heartbeat.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Chamadas;
