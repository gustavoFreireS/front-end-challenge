import React, {Component} from 'react';
import Share from '../../assets/images/share.png';
require('../../assets/stylesheets/callprice.scss');

class CallPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(window.innerHeight);
    return (
      <div className='root-call'>
        <h1 className='first-call'>Etios hatch 2017</h1>
        <h2 className='sub-call'>x 1.3 manual</h2>
        <h3 className='description'>Você tem mais para descobrir</h3>
        <h3 className='description'>de <span className='line-through'>R$44.120,00</span></h3>
        <h2 className='price-now'> por R$ <span className='big-money'>40.987,00</span></h2>
        <br/>
        <span className='consulta'> *consulte condições comerciais</span>
        <div className='share-info'>
          gostou? então compartilhe
          <img src={Share}/>
         </div>
         *Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme todas as informações com um de nossos vendedores..
    </div>
    );
  }
}

export default CallPrice;
