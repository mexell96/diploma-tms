import { SET_SHOW } from "../constants/shows";

const initialState = {
  currentShow: null,
  shows: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SHOW:
      return { ...state, currentShow: payload };

    default:
      return state;
  }
};
