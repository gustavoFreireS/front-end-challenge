import React, {Component} from 'react';
import Share from '../../assets/images/share.png';
import Seta from '../../assets/images/seta.png';
require('../../assets/stylesheets/isca.scss');
require('../../assets/stylesheets/callprice.scss');

class CallPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 12,
      opacityDropDown: 0,
      version: '1.8',
      show: false,
      checked: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClickSelect = this.handleClickSelect.bind(this);
    this.hideSelect = this.hideSelect.bind(this);
    this.handleVersion = this.handleVersion.bind(this);
    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleClick(parcela) {
    this.setState({clicked: parcela});

  }
  handleClickSelect(e) {
    document.addEventListener("click", this.hideSelect);
    this.setState({opacityDropDown: '1'});
    console.log(this.state.opacityDropDown);

  }
  hideSelect() {
    document.removeEventListener("click", this.hideSelect);
    this.setState({opacityDropDown: '0'});

  }
  handleHide(){
    this.refs.call.removeEventListener("click", this.handleHide);
    this.setState({show: false});

  }
  handleVersion(ver) {
    this.setState({version: ver});
  }
  handleClickShow(){
    this.setState({show: true});
    this.refs.call.addEventListener("click", this.handleHide);
  }
  render() {
    var click = this.state.clicked;
    return (
      <div className='root-no' id='call'>
          <div className='isca-container' style={this.state.show ? {marginLeft: '-10px', marginTop: '-35px'}: {}}>
            <p className='call'>Simular Financiamento</p>
            <p className='secondary-call'>Escolha a parcela que cabe no seu bolso</p>
            <div className='separator'></div>
            <p>Escolha uma versão</p>
            <div className='selector' onClick={() => this.handleClickSelect()} style={this.state.opacityDropDown > 0
              ? {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0
              }
              : {}}>
              {this.state.version}
              <span className='seta'>
                <img src={Seta}></img>
              </span>
            </div>
            <div className='dropdown-select' style={{
              opacity: this.state.opacityDropDown,
              height: this.state.opacityDropDown > 0
                ? 'auto'
                : '0'
            }}>

              <p onClick={() => this.handleVersion('1.0')}>1.0</p>
              <p onClick={() => this.handleVersion('1.3')}>1.3</p>
              <p onClick={() => this.handleVersion('1.5')}>1.5</p>
              <p onClick={() => this.handleVersion('1.8')}>1.8</p>
            </div>
            <div className='separator'></div>
            <input className='input-text' placeholder='Nome*' type='text'/>
            <input className='input-text' placeholder='E-mail*' type='text'/>
            <input className='input-text' placeholder='Telefone*' type='text'/>
            <p>Número de parcelas*</p>
            <div className='ball' onClick={() => this.handleClick(12)}>
              <div className='ball-checked' style= { (click == 12) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgba(0,0,0,0)' }}></div>
            </div>
            <span className='parcelas'>12</span>
            <div className='ball' onClick={() => this.handleClick(24)}>
              <div className='ball-checked' style= { (click == 24) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgba(0,0,0,0)' }}></div>
            </div>
            <span className='parcelas'>24</span>
            <div className='ball' onClick={() => this.handleClick(36)}>
              <div className='ball-checked' style= { (click == 36) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgba(0,0,0,0)' }}></div>
            </div>
            <span className='parcelas'>36</span>
            <div className='ball' onClick={() => this.handleClick(48)}>
              <div className='ball-checked' style= { (click == 48) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgba(0,0,0,0)' }}></div>
            </div>
            <span className='parcelas'>48</span>
            <input className='input-text' placeholder='Valor da entrada*' type='text'/>
            <div className='square' onClick={() => this.setState({checked: !this.state.checked})} >
              <div className='square-checked' style={!this.state.checked ? {display: 'none'} : {}}></div>
            </div>
            <span className='ofertas'>Desejo receber ofertas exclusivas da PG prime</span>
            <button className='button-simul'>Simular financiamento</button>
            <a href='#' className='privacy'>política de privacidade
            </a>
          </div>
      <div className='root-call' ref='call'>
        <h1 className='first-call'>Etios hatch 2017</h1>
        <h2 className='sub-call'>x 1.3 manual</h2>
        <h3 className='description'>Você tem mais para descobrir</h3>
        <h3 className='description'>de <span className='line-through'>R$44.120,00</span></h3>
        <h2 className='price-now'> por R$ <span className='big-money'>40.987,00</span></h2>
        <br/>
        <span className='consulta'> *consulte condições comerciais</span>
        <button className='button-simul mobile-btn' onClick={() => this.handleClickShow()}>Simular financiamento</button>
        <div className='share-info'>
          gostou? então compartilhe
          <img src={Share}/>
         </div>
         <p>*Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme todas as informações com um de nossos vendedores..</p>
    </div>
  </div>
    );
  }
}

export default CallPrice;
