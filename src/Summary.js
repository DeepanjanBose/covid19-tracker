import React, { Component } from "react";

class Summary extends Component {
  render() {
    const { summary, currentDate } = this.props;
    return (
      <div className="row">
        <div className="NewConfirmed">
          <h3>NewConfirmed</h3>
          <h1>{summary.NewConfirmed}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>

        <div className="TotalConfirmed">
          <h3>TotalConfirmed</h3>
          <h1>{summary.TotalConfirmed}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>

        <div className="NewDeaths">
          <h3>NewDeaths</h3>
          <h1>{summary.NewDeaths}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>

        <div className="TotalDeaths">
          <h3>TotalDeaths</h3>
          <h1>{summary.TotalDeaths}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>

        <div className="NewRecovered">
          <h3>NewRecovered</h3>
          <h1>{summary.NewRecovered}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>

        <div className="TotalRecovered">
          <h3>TotalRecovered</h3>
          <h1>{summary.TotalRecovered}</h1>
          <h4>{new Date(currentDate).toDateString()}</h4>
        </div>
      </div>
    );
  }
}

export default Summary;
