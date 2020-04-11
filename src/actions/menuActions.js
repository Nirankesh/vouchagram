import { FETCH_MENU } from "./types";

export const fetchMenu = () => (dispatch) => {
  fetch("https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories")
    .then((response) => response.json())
    .then((result) => {
      return dispatch({ type: FETCH_MENU, payload: result.data });
    });
};
