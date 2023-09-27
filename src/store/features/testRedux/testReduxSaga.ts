import { put, takeLatest } from 'redux-saga/effects';
import { testReduxAction } from './testReduxSlice';

export function* testSaga() {
  try {
    yield put(
      testReduxAction.loadTestReduxDataSucceeded({
        testRedux: {
          ability: 'testability',
          berry: 'testberry',
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
