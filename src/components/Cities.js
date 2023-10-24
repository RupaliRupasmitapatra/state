// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Cities = ({ selectedState }) => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    if (selectedState) {
      axios
        .get(`http://api.minebrat.com/api/v1/states/cities/${selectedState}`)
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.log("error fetching cities:", error);
        });
    }
  }, [selectedState]);
  return (
    <div>
      <select>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Cities;
