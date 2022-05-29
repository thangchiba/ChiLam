import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DueAPI from "../HTTP_Request/DueAPI";
import DueItem from "./DueItem";

function ListDue() {
  const dispatch = useDispatch();
  const [listDue, setListDue] = useState([]);
  useEffect(() => {
    const getDue = async () => {
      const response = await DueAPI.getDue();
      setListDue(response);
    };
    getDue();
  }, []);
  return listDue.map((due) => {
    return <DueItem due={due} />;
  });
}

export default ListDue;
