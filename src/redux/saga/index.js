import { all, fork } from 'redux-saga/effects';
import aspire from './aspire';

export default function* rootSaga() {
    yield all([
        fork(aspire)
    ]);
};