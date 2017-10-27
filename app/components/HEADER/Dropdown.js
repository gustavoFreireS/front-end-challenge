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
      <div className={'dropdown-nav' + (!this.state.show
        ? '-hide '
        : ' ') + this.props.target}>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;
