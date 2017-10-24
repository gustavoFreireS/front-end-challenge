import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Toyota from '../../assets/images/toyota.png';
require('../../assets/stylesheets/nav.scss');

/**
 * Componente de navbar contendo os links necessários para o funcionamento do site
 * Recebe a lista de links, e imagens utilizadas
 */
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <nav className='navbar'>
        <div className='container-nav'>
          <a className='brand'>
            <img src={Logo} height='30px'></img>
          </a>
          <div className='center-nav'>

          <div className='links-left'>

              <a>Nossos veículos</a>
              <a>Serviços</a>
              <a>Vendas diretas</a>
      </div>
      <div className='links-right'>
          <a className='telefones'>telefones</a>
</div>
  </div>
  <a className='logo'>
    <img src={Toyota} height='20px'></img>
  </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
