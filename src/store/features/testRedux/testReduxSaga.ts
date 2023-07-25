import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { testReduxAction } from "./testReduxSlice";

const fetchAPI = () => axios.get("http://localhost:3000/testData");

export function* testSaga() {
  try {
    const response: ReturnType<typeof fetchAPI> = yield call(() => fetchAPI());
    yield put(
      testReduxAction.loadTestReduxDataSucceeded({
        testRedux: {
          ability: "testability",
          berry: "testberry",
        },
      })
    );
  } catch (error) {
    // console.log(error);
  }
}

export function* loadTestSagaWatcher() {
  yield takeLatest(testReduxAction.loadTestReduxDataInitial, testSaga);
}
