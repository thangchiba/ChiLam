import { CircularProgress } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { dueAction } from "../../store/DueSlice";
import DueAPI from "../HTTP_Request/DueAPI";
import DueItem from "./DueItem";

function ListDue() {
  const dispatch = useDispatch();
  //List Due Added from everyWhere
  const listDue = useSelector((redux) => redux.due.listDue);
  const [page, setPage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  // const [listDue, setListDue] = useState([]);
  useEffect(() => {}, [page]);
  async function loadMore() {
    if (fetching) return;
    console.log("loadmore");
    setFetching(true);
    const response = await DueAPI.getDue({
      itemPerPage: 10,
      page: page,
      orderBy: "due_id desc",
    });
    console.log(response);
    if (response.length == 0) {
      console.log("no has more");
      setHasmore(false);
    }
    dispatch(dueAction.addListDue({ listDue: response }));
    setFetching(false);
    setPage(page + 1);
  }

  return (
    <Fragment>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<CircularProgress color="success" />}
      >
        {listDue.map((due) => {
          return <DueItem due={due} key={due.dueId} />;
        })}
      </InfiniteScroll>
    </Fragment>
  );
}

export default ListDue;
