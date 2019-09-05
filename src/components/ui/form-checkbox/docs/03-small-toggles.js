import React from "react";
import FormCheckbox from "../index";

class SmallToggleExamples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <FormCheckbox
        toggle
        small
        checked={this.state.checked}
        onChange={this.handleChange}>
        🚀 Enable (small) Rockets
      </FormCheckbox>
    );
  }
}

export default SmallToggleExamples;

