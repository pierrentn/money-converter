import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAmount } from "../actions/action-types";

function Amount() {
  const { amount } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAmount({ [name]: value }));
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="amount">Amount :</label>
      <input
        onChange={handleInputChange}
        value={amount}
        name="amount"
        type="text"
      />
    </div>
  );
}

export default Amount;
