import { createSlice } from "@reduxjs/toolkit";
import { Hello } from "../assets/data";

// Initialize user as an empty object or null if no user exists in localStorage
const initialState = {
  user: JSON.parse(window?.localStorage.getItem("user")) ?? Hello,  // Use null or default empty object
  edit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("user");
    },
    updateProfile(state, action) {
      state.edit = action.payload;
    },
  },
});

export default userSlice.reducer;

// Redux action creators

export function UserLogin(user) {
  return (dispatch) => {
    dispatch(userSlice.actions.login(user));
  };
}

export function Logout() {
  return (dispatch) => {
    dispatch(userSlice.actions.logout());
  };
}

export function UpdateProfile(val) {
  return (dispatch) => {
    dispatch(userSlice.actions.updateProfile(val));
  };
}
