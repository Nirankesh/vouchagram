import { FETCH_CONTACT } from "./types";

export const fetchContact = () => (dispatch) => {
  fetch("http://localhost:8000/contacts")
    .then((response) => response.json())
    .then((result) => {
      let res = "";
      if (result.length > 0) {
        res = result;
      }
      return dispatch({ type: FETCH_CONTACT, payload: res });
    });
};
