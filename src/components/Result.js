/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedState = searchParams.get("state");

  return (
    <div>
      <h1>{selectedState}</h1>
      <h1>
        you have selected {selectedState}.{selectedCityName}
      </h1>
    </div>
  );
};
export default Result;
