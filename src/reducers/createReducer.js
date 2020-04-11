import { CREATE_CONTACT } from "../actions/types";

const initalState = { redirect: false };

export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        redirect: action.payload,
      };
    default:
      return state;
  }
};
