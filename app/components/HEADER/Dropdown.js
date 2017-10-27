import React, {Component} from 'react';
import Eh2k17 from '../../assets/images/etiosh2k17.png';
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.hideDropdown = this.hideDropdown.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }
  hideDropdown() {
    document.removeEventListener("click", this.hideDropdown);
    document.body.style.position = 'static';
    this.setState({show: false});
  }
  showDropdown(target) {
    if (target == this.props.target) {
      this.setState({show: true});
      document.addEventListener("click", this.hideDropdown);
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }
  render() {
    return (
      <div className={this.props.target + ' dropdown-nav' + (!this.state.show
        ? '-hide'
        : '')}>
        <p>etios hatch 2017
          <img src={Eh2k17}></img>
        </p>
        <p>etios hatch 2017
          <img src={Eh2k17}></img>
        </p>
        <p>etios hatch 2017
          <img src={Eh2k17}></img>
        </p>
        <p>etios hatch 2017
          <img src={Eh2k17}></img>
        </p>
        <p>etios hatch 2017
          <img src={Eh2k17}></img>
        </p>
      </div>
    );
  }
}

export default Dropdown;
