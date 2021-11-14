import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTodayDate } from "../utils/date";

import { setDate } from "../actions/action-types";

function Date() {
  const { amount, date } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDate({ [name]: value }));
  };

  return (
    <div className="input-wrapper">
      <label htmlFor="date">Date :</label>
      <select
        value={date}
        name="date"
        onChange={handleInputChange}
        disabled={!amount}
      >
        <option value="2010-01-01">2010-01-01</option>
        <option value="2011-01-01">2011-01-01</option>
        <option value="2012-01-01">2012-01-01</option>
        <option value="2013-01-01">2013-01-01</option>
        <option value="2014-01-01">2014-01-01</option>
        <option value="2015-01-01">2015-01-01</option>
        <option value="2016-01-01">2016-01-01</option>
        <option value="2017-01-01">2017-01-01</option>
        <option value="2018-01-01">2018-01-01</option>
        <option value="2019-01-01">2019-01-01</option>
        <option value="2020-01-01">2020-01-01</option>
        <option value={getTodayDate()}>{getTodayDate()}</option>
      </select>
    </div>
  );
}

export default Date;
