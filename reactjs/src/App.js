import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="homepage" />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
