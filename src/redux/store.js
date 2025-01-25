import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./rootReducer";
import { PERSIST } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","cart"], // to remain data after refreshed page also
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // to remove serializableCheck error due to react-persist
  middleware: (getDefaultMiddlerware) => {
    return getDefaultMiddlerware({
      serializableCheck: {
        ignoreActions: [PERSIST],
      },
    });
  },
  // reducer:{
  //  auth: authReducer,
  //  counter:counterReducer,
  // }
});

const persistor = persistStore(store);

export { store, persistor };
