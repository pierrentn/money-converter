import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BaseCurrency from "./baseCurrency";
import Date from "./date";
import Amount from "./amount";

import { getConversion } from "../actions/action-types";

function ConverterDashboard() {
  const { amount, baseCurrency, date, convertedAmount } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConversion(date, baseCurrency));
  }, [baseCurrency, date, amount, dispatch]);

  return (
    <div>
      <div>
        <form>
          <Amount />

          <Date />

          <BaseCurrency />

          {amount !== 0 && (
            <p>
              {amount} - EUR TO {convertedAmount} - {baseCurrency}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ConverterDashboard;
