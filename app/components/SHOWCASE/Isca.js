import React, {Component} from 'react';
import Seta from '../../assets/images/seta.png';
require('../../assets/stylesheets/isca.scss');

/**
 * Componente contendo o formulário a ser preenxido pelo usuário
 */
class Isca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 12
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(parcela) {
    this.setState({clicked: parcela});
  }
  render() {
    var click = this.state.clicked;
    return (
      <div className='isca-container'>
        <p className='call'>Simular Financiamento</p>
        <p className='secondary-call'>Escolha a parcela que cabe no seu bolso</p>
        <div className='separator'></div>
        <p>Escolha uma versão</p>
        <div className='selector'>
          1.8
          <span className='seta'>
            <img src={Seta}></img>
          </span>
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
        <div className='square'>
          <div className='square-checked'></div>
        </div>
        <span className='ofertas'>Desejo receber ofertas exclusivas da PG prime</span>
        <button className='button-simul'>Simular financiamento</button>
        <a href='#' className='privacy'>política de privacidade
        </a>
      </div>
    );
  }
}

export default Isca;
