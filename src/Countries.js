import React, { Component } from 'react'

export default class Countries extends Component {
    render() {

        const {countries} = this.props;
        return (
          <tr>
              <td>{countries.Country}</td>
              <td>{countries.NewConfirmed}</td>
              <td>{countries.TotalConfirmed}</td>
              <td>{countries.NewDeaths}</td>
              <td>{countries.TotalDeaths}</td>
              <td>{countries.TotalRecovered}</td>
          </tr>
        )
    }
}
