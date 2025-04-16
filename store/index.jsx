import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { combinedReducer } from "../redux/rootReducer";

// export const store = configureStore({ reducer: combinedReducer });

export const makeStore = () => {
  return configureStore({
    reducer: combinedReducer
  });
};

export const wrapper = createWrapper(makeStore);


// import { combinedReducer } from "../redux/rootReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

// // Function to create the store
// const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });

// // Create the wrapper
// export const wrapper = createWrapper(makeStore);

// export default makeStore;