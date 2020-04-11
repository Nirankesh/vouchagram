import { CREATE_CONTACT } from "./types";

export const createContact = (thisIsObject) => (dispatch) => {
  fetch("http://localhost:8000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(thisIsObject),
  })
    .then((response) => response.json)
    .then((result) => {
      return dispatch({ type: CREATE_CONTACT, payload: true });
    });
};
