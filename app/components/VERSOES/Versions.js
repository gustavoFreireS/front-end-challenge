import React, {Component} from 'react';
import Highway from '../../assets/images/highway.png';
import Mercedes from '../../assets/images/mercedes.png';
require('../../assets/stylesheets/versions.scss');
class Versions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    }
  }
  render() {
    return (
      <div className='versions-container'>
        <div className='sections'>
          <div className='v-selector'>
            <p className='title'>Versões</p>
            <p className='versionCar' onClick={() => this.setState({active: 1})} style={this.state.active === 1
              ? {
                color: '#fff'
              }
              : {}}>A200</p>
              <p className='versionCar' onClick={() => this.setState({active: 2})} style={this.state.active === 2
                ? {
                  color: '#fff'
                }
                : {}}>A250 Turbo Sport</p>

                <p className='versionCar' onClick={() => this.setState({active: 3})} style={this.state.active === 3
                  ? {
                    color: '#fff'
                  }
                  : {}}>A 45 AMG 4MATIC</p>
          </div>
          <div className='car-image'><img src={Mercedes} height='200px'/></div>
          <div className='car-info'>
            <p className='title'>Informações gerais</p>
            <table width='100%'>
              <tbody>
                <tr>
                  <td>Cilindros/válvulas por cilindro:</td>
                  <td>4/4</td>

                </tr>
                <tr>
                  <td>Diâmetro/Curso(mm):</td>
                  <td>87.5/8.31</td>

                </tr>
                <tr>
                  <td>Cilindrada(cc):</td>
                  <td>1,999</td>

                </tr>
                <tr>
                  <td>Potência máxima ECC - Cv:</td>
                  <td>240</td>
                </tr>
                <tr>
                  <td>em rev/min:</td>
                  <td>5,500</td>
                </tr>
                <tr>
                  <td>Torque máximo ECC - Nn (libra-pré):</td>
                  <td>340</td>
                </tr>
                <tr>
                  <td>
                    em rev/min:</td>
                  <td>2,000-4,000</td>
                </tr>
                <tr>
                  <td>Potência máxima ECC - Cv:</td>
                  <td>240</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='opcionais'>
            <p className='title'>Itens de série</p>
            <div className='option-contaiber'>
              <p>Ar condicionado</p>
              <p>Air bag</p>
              <p>Desembaçador traseiro</p>
              <p>Ar quente</p>
              <p>Freios ABS</p>
              <p>Teto solar</p>
              <p>Air bag</p>
              <p>Teto solar</p>
              <p>Ar quente</p>
              <p>Freios ABS</p>
              <p>Teto solar</p>
              <p>Desembaçador traseiro</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Versions;
