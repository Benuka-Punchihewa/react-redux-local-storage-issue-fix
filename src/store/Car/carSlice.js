import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    /**
     * Schema
     *
     * {
     *  name: string;
     *  engineCapacity: number;
     *  topSpeed: number;
     * }
     */
  },
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload);
    },
    clearState(state) {
      state.cars = [];
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice;
