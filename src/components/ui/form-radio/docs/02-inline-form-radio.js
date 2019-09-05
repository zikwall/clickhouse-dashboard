import React from "react";
import FormRadio from "../index";

export default class FormRadioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSport: null
    };

    this.changeSport = this.changeSport.bind(this);
  }

  changeSport(sport) {
    this.setState({
      selectedSport: sport
    });
  }

  render() {
    return (
      <div>
        <div>
          <p className="mb-2">Select your favorite sport:</p>
          <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "basketball"}
            onChange={() => {
              this.changeSport("basketball");
            }}
          >
            Basketball
          </FormRadio>
          <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "football"}
            onChange={() => {
              this.changeSport("football");
            }}
          >
            Football
          </FormRadio>
          <FormRadio
            inline
            name="sport"
            checked={this.state.selectedSport === "tennis"}
            onChange={() => {
              this.changeSport("tennis");
            }}
          >
            Tennis
          </FormRadio>
        </div>
        <span>
          <strong>Selected sport:</strong>{" "}
          <span>{this.state.selectedSport || "none"}</span>
        </span>
      </div>
    );
  }
}
