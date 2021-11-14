import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setBaseCurrency, getCurrencies } from "../actions/action-types";

function BaseCurrency() {
  const { amount, baseCurrency, symbols } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currenciesList, setCurrenciesList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setBaseCurrency({ [name]: value }));
  };

  useEffect(() => {
    dispatch(getCurrencies());
    console.log("getting currencies");
  }, [dispatch]);

  useEffect(() => {
    if (symbols) {
      for (const symbol in symbols) {
        const newCurrency = [symbol, symbols[symbol]];
        setCurrenciesList((prevArray) => [...prevArray, newCurrency]);
      }
    }
  }, [symbols]);

  return (
    <div>
      <label htmlFor="baseCurrency">Currency :</label>
      <select
        disabled={!amount}
        value={baseCurrency}
        name="baseCurrency"
        onChange={handleInputChange}
      >
        {currenciesList.map((el, i) => (
          <option value={el[0]} key={i}>
            {el[1]} - {el[0]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BaseCurrency;
