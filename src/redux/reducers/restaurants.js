import * as actionTypes from "../actionTypes";

const initialState = {
  data: [],
  searchResult: []
};

export const restaurants = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actionTypes.GET_RESTAURANTS:
      return {
        ...state,
        data: payload,
        searchResult: payload
      };

    case actionTypes.FILTER_RESTAURANTS:
      return {
        ...state,
        searchResult: payload
      };

    default:
      return state;
  }
};
