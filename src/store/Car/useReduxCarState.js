import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validate from "./carSchemaValidator";
import { carActions } from "./carSlice";

const useReduxCarState = () => {
  const carState = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const [returnState, setReturnState] = useState(null);

  useEffect(() => {
    try {
      validate(carState);
      setReturnState(carState);
    } catch (err) {
      alert(err.message);
      dispatch(carActions.clearState());
    }
  }, [carState]);

  return returnState;
};

export default useReduxCarState;
