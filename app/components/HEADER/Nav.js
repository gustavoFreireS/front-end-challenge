/*eslint-disable import/first*/
import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Toyota from '../../assets/images/toyota.png';
require('../../assets/stylesheets/nav.scss');
import FontAwesome from 'react-fontawesome';
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
            <img src={Logo} height='40px'></img>
          </a>
          <div className='center-nav'>

            <div className='links-left'>

              <a>Nossos veículos
                <FontAwesome className='chev' name='chevron-down' size='0.5x'/></a>
              <a>Serviços</a>
              <a>Vendas diretas
                <FontAwesome className='chev' name='chevron-down' size='0.5x'/></a>
            </div>
            <div className='links-right'>
              <a className='telefones'>
                <FontAwesome name='phone' className='phone'/>
                telefones
                <FontAwesome className='chev' name='chevron-down' size='1x'/></a>
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
