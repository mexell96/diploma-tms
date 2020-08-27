import { call, put } from "redux-saga/effects";
import { getShow as getShowAPI } from "../../api/show";
import { setShow } from "../../actions/shows";

export function* getShow(action) {
  if (action.payload) {
    const show = yield call(getShowAPI, action.payload);
    yield put(setShow(show));
  }
}
