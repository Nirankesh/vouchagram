import { FETCH_MENU } from "../actions/types";

const initalState = { items: [] };

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
