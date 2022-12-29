import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index";
import LoadingBar from "react-redux-loading-bar";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadingBar
        style={{ backgroundColor: "#F9A826", height: "5px", zIndex: "1000" }}
        updateTime={50}
        maxProgress={100}
        progressIncrease={30}
      />
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
