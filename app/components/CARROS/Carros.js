import React, {Component} from 'react';
import Slider from 'react-slick';
import Cla from '../../assets/images/cla.png';
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
        slidesToShow: 2,
        slidesToScroll: 3,
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
      <div><img className='car-imageS' src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' src={Cla}></img> <p className='description'>Classe CLA</p></div>
      <div><img className='car-imageS' src={Cla}></img> <p className='description'>Classe CLA</p></div>
    </Slider>
    </div>
    );
  }
}

export default Carros;
