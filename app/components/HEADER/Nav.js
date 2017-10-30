/*eslint-disable import/first*/
import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png';
import Toyota from '../../assets/images/toyota.png';
import Eh2k17 from '../../assets/images/etiosh2k17.png';
import Etiosseda from '../../assets/images/estiosseda.png';
import Cross from '../../assets/images/cross.png';
import Corolla from '../../assets/images/corolla.png';
import Hilux from '../../assets/images/hilux.png';
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
      showCars: false,
      showNav: false,
      number: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClickCars = this.handleClickCars.bind(this);
    this.handleShowNavbar = this.handleShowNavbar.bind(this);
    this.showNumber = this.showNumber.bind(this);
  }

  showNumber(number){
    if (number == this.state.number){
      this.setState({number: 0});
    }
    else{
    this.setState({number: number});
  }
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
  handleShowNavbar() {
    console.log("clicou");
    this.setState({
      showNav: !this.state.showNav
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav className='navbar' style={{
        backgroundColor: this.state.navColor
      }}>
        <div className='navbar-header'>
          <a className='brand'>
            <img src={Logo}></img>
          </a>
          <FontAwesome className='bars' name='bars' onClick={() => this.handleShowNavbar()}/>
        </div>

        <div className='navbar-container' style={this.state.showNav
          ? {
            height: '100vh',
            overflow: 'auto',
            width: '100%',
          }
          : {}}>
          <div className='nav-links'>
            <div className='dropdown-container'>
              <a onClick={() => this.refs.child.showDropdown('carros')}>Nossos veículos
                <FontAwesome className='chev' name='chevron-down'/></a>
              <Dropdown target={'carros'} ref="child">
                <p>etios hatch 2017
                  <img src={Eh2k17}></img>
                </p>
                <p>etios sedã 2017
                  <img src={Etiosseda}></img>
                </p>
                <p>etios cross 2017
                  <img src={Cross}></img>
                </p>
                <p>corolla 2016
                  <img src={Corolla}></img>
                </p>
                <p>Hylux cd diesel
                  <img src={Hilux}></img>
                </p>
              </Dropdown>
            </div>
            <a>Serviços</a>
            <div className='dropdown-container'>
              <a onClick={() => this.refs.child2.showDropdown('vendas')}>Vendas diretas
                <FontAwesome className='chev' name='chevron-down'/></a>
              <Dropdown target={'vendas'} ref="child2">
                <p>Empresas
                </p>
                <p>Frotistas
                </p>
                <p>Governo
                </p>
                <p>PCD
                </p>
                <p>Produto Rural
                </p>
                <p>Taxista
                </p>
              </Dropdown>
            </div>
            <div className='dropdown-container'>
              <a className='telefones' onClick={() => this.refs.child3.showDropdown('telefones')}>
                <FontAwesome name='phone' className='phone'/>
                telefones
                <FontAwesome className='chev' name='chevron-down'/></a>
              <Dropdown target={'telefones'} ref="child3">
                <p onClick={()=> this.showNumber(1)}>Toyota Nações Unidas <FontAwesome className='chev' name='chevron-down'/></p>
                <div className='callNumber' style={this.state.number != 1 ? {display: 'none'}: {}}>
                  <p>(11) 3500-7909 <span>| Serviços</span></p>
                </div>
                <p onClick={()=> this.showNumber(2)}>Toyota Morumbi <FontAwesome className='chev' name='chevron-down'/></p>
                <div className='callNumber' style={this.state.number != 2 ? {display: 'none'}: {}}>
                  <p>(11) 3500-7909 <span>| Serviços</span></p>
                </div>
                <p onClick={()=> this.showNumber(3)}>Toyota Morumbi <FontAwesome className='chev' name='chevron-down'/></p>
                <div className='callNumber' style={this.state.number != 3 ? {display: 'none'}: {}}>
                  <p>(11) 3500-7909 <span>| Serviços</span></p>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className='navbar-right'>
          <a className='logo'>
            <img src={Toyota} height='20px'></img>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
