import { Fragment } from "react";
import Header from "./Header";
import ListDue from "./ListDue";

function Due() {
  return (
    <Fragment>
      <Header />
      <ListDue />
      {/* <DueDetail /> */}
    </Fragment>
  );
}

export default Due;
