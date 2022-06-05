import { Fragment } from "react";
import { useSelector } from "react-redux";
import DueDetail from "./DueDetail";
import Filter from "./Filter";
import Header from "./Header";
import ListDue from "./ListDue";

function Due() {
  return (
    <Fragment>
      <Filter />
      <Header />
      <ListDue />
      {/* <DueDetail /> */}
    </Fragment>
  );
}

export default Due;
