import React, {Component} from 'react';
import Slider from 'react-slick';
import Cla from '../../assets/images/cla.png';
import Aclass from '../../assets/images/aclass.png';
import Cclass from '../../assets/images/cclass.png';
import Right from '../../assets/images/arrowr.png';
require('../../assets/stylesheets/carros.scss');


class Carros extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    var settings = {
     dots: true,
     arrows: true,
     infinite: true,
     slidesToShow: 5,
     slidesToScroll: 2,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        arrows: false,
      }
    }
  ]
   };
    return (
    <div className='sliderX'>
      <h3> Conheça nossos Carros </h3>
      <div className='separator'></div>
      <Slider {...settings}>
      <div><img className='car-imageS' width= '137px;' height='86'src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' width= '137px;' height='86' src={Cclass}></img> <p className='description'>Classe C</p></div>
      <div><img className='car-imageS' width= '137px;' height='86' src={Aclass}></img> <p className='description'>Classe A</p></div>
      <div><img className='car-imageS' width= '137px;' height='86' src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' width= '137px;' height='86' src={Cclass}></img> <p className='description'>Classe C</p></div>
    </Slider>
    </div>
    );
  }
}

export default Carros;
