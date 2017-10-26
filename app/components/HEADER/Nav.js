/*eslint-disable import/first*/
import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Toyota from '../../assets/images/toyota.png';
require('../../assets/stylesheets/nav.scss');
import FontAwesome from 'react-fontawesome';
/**
 * Componente de navbar contendo os links necessários para o funcionamento do site
 */
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: 'transparent'
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll(event) {
    let scrollTop = window.scrollY;
    if (scrollTop > 30) {
      this.setState({navColor: '#1c1c1c'});
    } else {
      // console.log(window.innerWidth);
      this.setState({navColor: 'transparent'});
      }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav className='navbar' style={{backgroundColor: this.state.navColor}}>
        <div className='container-nav'>
          <a className='brand'>
            <img src={Logo}></img>
          </a>
          <div className='center-nav'>

            <div className='links-left'>

              <a>Nossos veículos
                <FontAwesome className='chev' name='chevron-down'/></a>
              <a>Serviços</a>
              <a>Vendas diretas
                <FontAwesome className='chev' name='chevron-down'/></a>
            </div>
            <div className='links-right'>
              <a className='telefones'>
                <FontAwesome name='phone' className='phone'/>
                telefones
                <FontAwesome className='chev' name='chevron-down'/></a>
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
