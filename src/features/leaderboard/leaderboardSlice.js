import { createSlice } from "@reduxjs/toolkit";
import { createData } from "../../components/Leaderboard";

const initialState = {
  leaderboard: [
    createData("Frozen yoghurt", 159, 21, "easy"),
    createData("Ice cream sandwich", 237, 9, "easy"),
    createData("Eclair", 262, 18, "hard"),
    createData("Cupcake", 305, 22, "medium"),
    createData("Gingerbread", 356, 12, "hard"),
  ],
  status: "idle",
};

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addScore: (state, action) => {
      console.log(action.payload);
      state.leaderboard.push = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { addScore } = leaderboardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default leaderboardSlice.reducer;
