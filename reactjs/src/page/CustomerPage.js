import { Fragment } from "react";
import { Route, Router, Routes } from "react-router-dom";
import ListCustomer from "../component/ListCustomer";
import CustomerDetail from "../component/ListCustomer/CustomerDetail";

function CustomerPage() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<ListCustomer />} />
        <Route path="/:customerId" element={<CustomerDetail />} />
      </Routes>
    </Fragment>
  );
}
export default CustomerPage;
