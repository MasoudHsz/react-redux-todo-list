import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logIn(state) {
      state.isLoggedIn = true;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

/* const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === "toggle") {
    return { showCounter: !state.showCounter, counter: state.counter };
  }
  return state;
};
*/
