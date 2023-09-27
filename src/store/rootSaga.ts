import { all } from 'redux-saga/effects';
import { testSaga } from './features/testRedux/testReduxSaga';

export default function* rootSaga() {
  yield all([testSaga()]);
}
