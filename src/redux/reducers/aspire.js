import { actionTypes } from "../../constants";

const initialState = {
  internet: '',
  loader: false,
  weeklyLimit: { isLimit: false, limit: '' },
  cardDetail: {
    "name": "",
    "card": {
      "number": "",
      "cvv": "",
      "expiry": "",
      "amount": ""
    }
  }
};

export const aspire = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.internetStatus:
      return { ...state, internet: action.payload };
    case actionTypes.loaderStatus:
      return { ...state, loader: action.payload };
    case actionTypes.setWeklyLimit:
      return { ...state, weeklyLimit: action.payload };
    default:
      return state;
  }
};