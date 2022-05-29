import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CustomerPage from "./page/CustomerPage";
import DuePage from "./page/DuePage";
import PayPage from "./page/PayPage";

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="customer" />}></Route>
          <Route path="/due" element={<DuePage />}></Route>
          <Route path="/customer" element={<CustomerPage />}></Route>
          <Route path="/pay" element={<PayPage />}></Route>
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
