import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./page/HomePage";
import store from "./store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="homepage" />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
          </Routes>
        </Box>
      </Provider>
    </Fragment>
  );
}

export default App;
