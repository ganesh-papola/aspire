import { actionTypes } from "../../constants";

export const setLoader = payload => ({ type: actionTypes.loaderStatus, payload });
export const updateInternetStatus = payload => ({ type: actionTypes.internetStatus, payload });
export const setWeeklyLimit = payload => ({ type: actionTypes.setWeklyLimit, payload });
export const getMyCardDetails = payload => ({ type: actionTypes.getCardDetails, payload })