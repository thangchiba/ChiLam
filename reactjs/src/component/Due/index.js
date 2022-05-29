import { Fragment } from "react";
import { useSelector } from "react-redux";
import ListDue from "./ListDue";
import DueDetail from "./DueDetail";
import Filter from "./Filter";
import Header from "./Header";

function DuePage() {
  return (
    <Fragment>
      <Filter />
      <Header />
      <ListDue />
      <DueDetail />
    </Fragment>
  );
}

export default DuePage;
