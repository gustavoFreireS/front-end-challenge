import React, {Component} from 'react';
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
    var root =document.getElementById("root");
    root.removeEventListener("click", this.hideDropdown);
    root.style.position = 'static';
    this.setState({show: false});
  }
  showDropdown(target) {
    if (target == this.props.target) {
      this.setState({show: true});
      var root = document.getElementById("root");
      var navbar = document.getElementById("root");
      root.addEventListener("click", this.hideDropdown);
      root.style.position = 'fixed';
      root.style.width = '100%';
    }
    if (this.state.show == true){
      this.setState({show: false});
      root.style.position = 'static';
    }
  }
  render() {
    return (
      <div className={'dropdown-nav' + (!this.state.show
        ? '-hide '
        : ' ') + this.props.target}>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;
