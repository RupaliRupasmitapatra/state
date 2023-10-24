// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cities from "./Cities";

const List = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://api.minebrat.com/api/v1/states")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.log("Error fetching states:", error);
      });
  }, []);
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  const handleSubmit = () => {
    history.push(`/result?state=${selectedState}`);
  };
  return (
    <div>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      <Cities selectedState={selectedState} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default List;
