import { GET_SHOW, SET_SHOW } from "../constants/shows";

export const getShow = (id) => ({
  type: GET_SHOW,
  payload: id,
});

export const setShow = (show) => ({
  type: SET_SHOW,
  payload: show,
});
