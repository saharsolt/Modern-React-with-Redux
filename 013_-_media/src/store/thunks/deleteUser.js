import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
  // Here whatever returns is an empty object === action.payload so we return the deleted user
  // return response.data;
});

export { deleteUser };
