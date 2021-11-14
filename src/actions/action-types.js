import { BASE_URL, API_KEY } from "../constants/GLOBALS";

import {
  GET_CURRENCIES,
  GET_CONVERSION,
  SET_AMOUNT,
  SET_BASE_CURRENCY,
  SET_DATE,
  SET_CONVERTED_AMOUNT,
} from "../constants/actions";

export const getCurrencies = () => async (dispatch) => {
  try {
    const data = await fetch(`${BASE_URL}/symbols?access_key=${API_KEY}`);
    const jsonData = await data.json();
    dispatch({
      type: GET_CURRENCIES,
      jsonData,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getConversion = (date, symbol) => async (dispatch) => {
  try {
    const data = await fetch(
      `${BASE_URL}/${date}?access_key=${API_KEY}&symbols=${symbol}`
    );
    const { rates } = await data.json();
    dispatch({
      type: GET_CONVERSION,
      rates: rates[symbol],
    });
    dispatch({
      type: SET_CONVERTED_AMOUNT,
    });
  } catch (error) {
    console.error(error);
  }
};

export const setAmount = (payload) => {
  return {
    type: SET_AMOUNT,
    payload,
  };
};

export const setBaseCurrency = (payload) => {
  return {
    type: SET_BASE_CURRENCY,
    payload,
  };
};

export const setDate = (payload) => {
  return {
    type: SET_DATE,
    payload,
  };
};

export const setConvertedAmount = () => {
  return {
    type: SET_CONVERTED_AMOUNT,
  };
};
