import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SnackbarProvider maxSnack={4}>
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
