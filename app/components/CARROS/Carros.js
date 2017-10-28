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
     slidesToScroll: 2
   };
    return (
    <div className='sliderX'>
      <Slider {...settings}>
      <div><img src={Cla}></img></div>
      <div><img src={Cla}></img></div>
      <div><img src={Cla}></img></div>
      <div><img src={Cla}></img></div>
      <div><img src={Cla}></img></div>
      <div><img src={Cla}></img></div>
    </Slider>
    </div>
    );
  }
}

export default Carros;
