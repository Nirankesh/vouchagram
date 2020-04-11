import { FETCH_CONTACT } from "../actions/types";

const initalState = { items: [] };

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CONTACT:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
