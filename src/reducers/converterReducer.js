import {
  GET_CURRENCIES,
  GET_CONVERSION,
  SET_AMOUNT,
  SET_BASE_CURRENCY,
  SET_DATE,
  SET_CONVERTED_AMOUNT,
} from "../constants/actions";

import { getTodayDate } from "../utils/date";

const stateInit = {
  amount: 1,
  convertedAmount: 1,
  symbols: [],
  baseCurrency: "EUR",
  rates: 1,
  date: getTodayDate(),
};

const reducer = (state = stateInit, actions = {}) => {
  switch (actions.type) {
    case GET_CURRENCIES:
      const {
        jsonData: { symbols },
      } = actions;
      return { ...state, symbols };

    case SET_AMOUNT:
      const { amount } = actions.payload;

      if (new RegExp("^[0-9]*$").test(amount)) {
        return {
          ...state,
          amount,
        };
      }

      return {
        ...state,
        amount: 1,
      };

    case SET_BASE_CURRENCY:
      const { baseCurrency } = actions.payload;

      return { ...state, baseCurrency };

    case SET_DATE:
      const { date } = actions.payload;

      return { ...state, date };

    case GET_CONVERSION:
      const { rates } = actions;
      return { ...state, rates };

    case SET_CONVERTED_AMOUNT:
      const convertedAmount = state.amount * state.rates;

      return { ...state, convertedAmount };

    default:
      return { ...state };
  }
};

export default reducer;
