import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Fragment>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="homepage" />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
        </Routes>
      </Box>
    </Fragment>
  );
}

export default App;
