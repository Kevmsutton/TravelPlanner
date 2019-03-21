import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";

class SaveJourneyForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="bg-dark-red dib br4 pa4 ma4">
        <h3>Save a Journey</h3>
        <form>
          <input
            type="text"
            name="to"
            placeholder="From..."
            value={this.props.from}
            onChange={this.props.handleFromChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="from"
            placeholder="To..."
            value={this.props.to}
            onChange={this.props.handleToChange}
          />
          <br />
          <br />
          <Button>Save Journey</Button>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default SaveJourneyForm;