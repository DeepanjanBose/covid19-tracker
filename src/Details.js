import React, { Component } from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries";

class Details extends Component {
  state = {
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
  };
  async componentDidMount() {
    const response = await axios.get("https://api.covid19api.com/summary");
    console.log(response);
    this.setState({ countries: response.data.Countries });
    this.setState({ global: response.data.Global });
    this.setState({ currentDate: response.data.Date });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>...loading</h1>;
    }

    return (
      <div>
        <div>
          <Summary
            summary={this.state.global}
            currentDate={this.state.currentDate}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>TotalConfirmed</th>
              <th>NewDeaths</th>
              <th>TotalDeaths</th>
              <th>TotalRecovered</th>
            </tr>
          </thead>
          <tbody>
              {this.state.countries.map(country =>(
                  <Countries countries = {country} key={country.Country}/>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
