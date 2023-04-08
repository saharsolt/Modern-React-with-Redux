import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  deleteCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, deleteCar };
