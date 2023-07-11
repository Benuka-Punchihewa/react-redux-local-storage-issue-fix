import React, { useState } from "react";
import useReduxCarState from "./store/Car/useReduxCarState";
import { useDispatch } from "react-redux";
import { carActions } from "./store/Car/carSlice";

const App = () => {
  const dispatch = useDispatch();
  const [inputObj, setInputObj] = useState({
    name: "",
    engineCapacity: "",
    topSpeed: "",
  });
  const carState = useReduxCarState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(carActions.addCar(inputObj));
    setInputObj({
      name: "",
      engineCapacity: "",
      topSpeed: "",
    });
  };

  return (
    <React.Fragment>
      <h1>Cars</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Name (String)"
          value={inputObj.name}
          onChange={(e) => setInputObj({ ...inputObj, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Engine Capacity (Number)"
          value={inputObj.engineCapacity}
          onChange={(e) =>
            setInputObj({ ...inputObj, engineCapacity: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Top Speed (Number)"
          value={inputObj.topSpeed}
          onChange={(e) =>
            setInputObj({ ...inputObj, topSpeed: e.target.value })
          }
        />
        <button type="submit">Add Car</button>
      </form>
      <br />
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Engine Capacity</th>
          <th>Top Speed</th>
        </tr>
        {carState?.cars?.map((car) => (
          <tr>
            <td>{car.name}</td>
            <td>{car.engineCapacity}</td>
            <td>{car.topSpeed}</td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};

export default App;
