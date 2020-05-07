import React, { Component } from "react";
import { getData, filteredData } from "../redux/actions/restaurants";
import { connect } from "react-redux";

import { Grid, Search, Card } from "semantic-ui-react";

class Home extends Component {
  state = {
    activeIndex: 0,
    countries: [],
    selectedCountry: "all"
  };

  componentDidMount() {
    this.props.getData();
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps) {
      let copy = [];
      nextProps.resData.filter(restaurant =>
        !copy.includes(restaurant.Country)
          ? copy.push(restaurant.Country)
          : null
      );
      console.log(copy);
      return {
        countries: copy
      };
    } else {
      return null;
    }
  }

  handleChange = e => {
    this.props.filteredData(this.props.resData, e.target.value);
  };

  render() {
    console.log("RENDER", this.props.filteredData);
    return (
      <React.Fragment>
        <Grid style={{ margin: "0px" }}>
          <Grid.Row textAlign="center">
            <Grid.Column computer={8}>
              <Search />
            </Grid.Column>
            <Grid.Column>
              <select onChange={this.handleChange}>
                <option value="">Please select a country</option>
                {this.state.countries.map((countryName, key) => {
                  return (
                    <option value={countryName} key={key}>
                      {countryName}
                    </option>
                  );
                })}
              </select>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column columns={4}>
              {this.props.searchResult.map((restaurant, index) => {
                return (
                  <Card key={index}>
                    <Card.Content header={restaurant.Brand} />
                    <Card.Content description={restaurant.Country} />
                  </Card>
                );
              })}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  resData: state.restaurants.data,
  searchResult: state.restaurants.searchResult
});

export default connect(mapStateToProps, { getData, filteredData })(Home);
