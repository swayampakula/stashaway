import * as actionTypes from "../actionTypes";

export const getData = () => async dispatch => {
  await fetch("http://starlord.hackerearth.com/TopRamen")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: actionTypes.GET_RESTAURANTS,
        payload: data
      });
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const filteredData = (restaurants, country) => dispatch => {
  dispatch({
    type: actionTypes.FILTER_RESTAURANTS,
    payload: restaurants.filter(restaurant => restaurant.Country === country)
  });
};
