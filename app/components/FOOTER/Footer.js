import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Auto from '../../assets/images/auto.png';
import FontAwesome from 'react-fontawesome';
require('../../assets/stylesheets/footer.scss');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='logoi'>
          <img src={Logo}></img>
      </div>
    <div className='buttons'>
      <div className='gray-box'><FontAwesome className='icon-f' name='facebook'/></div>
      <div className='gray-box'><FontAwesome className='icon-f' name='twitter'/></div>
      <div className='gray-box'><FontAwesome className='icon-f' name='google-plus'/></div>
    </div>
    <div className='link-info'>
      © Copyright 2015 - Cliente - Todos os direitos reservados.
      <div className='f-links'>
        <a>Visitar site</a> <a>Contato</a> <a>Política de privacidade</a>
      </div>
      <img src={Auto} />
    </div>
  </div>
    </div>
    );
  }
}

export default Footer;
