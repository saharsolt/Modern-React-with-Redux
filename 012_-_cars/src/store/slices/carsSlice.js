import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    carsList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption: action.payload === {name:'ab', cost:145}
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    deleteCar(state, action) {
      //Assumption: action.payload === the id of car we want to remove
      const updated = state.carsList.filter((car) => {
        return car.id !== action.payload;
      });
      state.carsList = updated;
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
