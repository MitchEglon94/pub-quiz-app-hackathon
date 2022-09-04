import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,

  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUserInfo } = userSlice.actions;

export default userSlice.reducer;
