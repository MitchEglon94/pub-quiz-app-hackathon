import { configureStore } from "@reduxjs/toolkit";

import leaderboardReducer from "../features/leaderboard/leaderboardSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
    user: userReducer,
  },
});

export default store;
