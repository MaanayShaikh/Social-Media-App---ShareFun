import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./UserSlice";
import themeSlice from "./theme";
import postSlice from "./PostSlice";

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeSlice,
  posts: postSlice,
});

export {rootReducer};