import { all, delay, put, takeLatest } from "redux-saga/effects";
import { setLoader } from "../actions";
import { request } from "../../utils";
import { actionTypes, baseUrl, errors, path, strings } from "../../constants";

const dummyData = {
        "name": "Ganesh Singh Papola",
        balance: "3,000",
        "card": {
          "number": "2137 7635 8973 7763",
          "cvv": "324",
          "expiry": "11/22",
          "amount": "2990"
        }
}
function* getCardDetails({payload:{ internet, onSuccess=()=>{}, onFail=()=>{} }}) {
    yield put(setLoader(true));
    // TODO - removed api call due to limited free quote
        // const { status, data = {} } = yield request(baseUrl+path);
        // status == 200 ? onSuccess(data) : onFail(errors.code401);
        yield delay(3000);
        onSuccess(dummyData);
        yield put(setLoader(false));
        if(!internet)alert(errors.noInternet);
}
export default function* root() {
    yield all([
        takeLatest(actionTypes.getCardDetails, getCardDetails),
    ]);
}
