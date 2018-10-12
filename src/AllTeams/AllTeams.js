import React, { Component } from 'react';


const API_ROUTE = "https://todolistapi2.herokuapp.com/sports";


class AllTeams extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch(API_ROUTE)
      .then(res => res.json())
      .then(
        (results) => {
          this.setState({
            isLoaded: true,
            items: results
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )

      console.log(this.state.data);
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div>
        <h1>All Teams</h1>
        <ul>
          {items.map(item => (
            <li key={item.city}>
              {item.city} {item.stateAbbr}
              {item.team}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AllTeams;
