import { Fragment } from "react";
import { useSelector } from "react-redux";
import Content from "./Content";
import DueDetail from "./DueDetail";
import Header from "./Header";

const DUMMY_CONTENT = [
  {
    customerName: "Tự Long",
    customerImage: "tulong.jpeg",
    money: 1650,
    countDate: 8,
  },
  {
    customerName: "Xuân Bắc",
    customerImage: "xuanbac.jpeg",
    money: 850,
    countDate: 3,
  },
  {
    customerName: "Xuân Hinh",
    customerImage: "xuanhinh.jpeg",
    money: 2840,
    countDate: 19,
  },
  {
    customerName: "Thắng",
    customerImage: "chienthang.webp",
    money: 250,
    countDate: 1,
  },
];

function ListDue() {
  return (
    <Fragment>
      <Header />
      <Content />
      <DueDetail />
    </Fragment>
  );
}

export default ListDue;
