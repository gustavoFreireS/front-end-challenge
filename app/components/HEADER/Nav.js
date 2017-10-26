/*eslint-disable import/first*/
import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Toyota from '../../assets/images/toyota.png';
require('../../assets/stylesheets/nav.scss');
import FontAwesome from 'react-fontawesome';
import Dropdown from './Dropdown.js';
/**
 * Componente de navbar contendo os links necessários para o funcionamento do site
 */
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: 'transparent',
      showCars: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickCars = this.handleClickCars.bind(this);
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
  handleClickCars() {
    this.setState({showCars: true});

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav className='navbar' style={{
        backgroundColor: this.state.navColor
      }}>
        <div className='container-nav'>
          <a className='brand'>
            <img src={Logo}></img>
          </a>
          <div className='center-nav'>

            <div className='links-left'>
              <div className='dropdown-container'>
              <a onClick={() => this.refs.child.showDropdown('carros')}>Nossos veículos
                <FontAwesome className='chev' name='chevron-down'/></a>
              <Dropdown target={'carros'} ref="child"/>
            </div>
              <a>Serviços</a>
              <div className='dropdown-container'>
              <a onClick={() => this.refs.child2.showDropdown('vendas')}>Vendas diretas
                <FontAwesome className='chev' name='chevron-down'/></a>
              <Dropdown target={'vendas'} ref="child2"/>
            </div>
            </div>
            <div className='links-right'>
              <div className='dropdown-container'>
              <a className='telefones' onClick={() => this.refs.child3.showDropdown('telefones')}>
                <FontAwesome name='phone' className='phone'/>
                telefones
                <FontAwesome className='chev' name='chevron-down'/></a>
                <Dropdown target={'telefones'} ref="child3"/>
              </div>
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
