import { takeLatest } from "redux-saga/effects";

import { GET_SHOW } from "../../constants/shows";
import { getShow } from "../workers/shows";

export default function* showsWatcher() {
  yield takeLatest(GET_SHOW, getShow);
}
