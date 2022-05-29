import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DueAPI from "../HTTP_Request/DueAPI";
import DueItem from "./DueItem";
import InfiniteScroll from "react-infinite-scroller";
import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
// import InfiniteScroll from "react-infinite-scroller";

function ListDue() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [listDue, setListDue] = useState([]);
  useEffect(() => {}, []);
  async function loadMore() {
    console.log("loadmore");
    if (fetching) return;
    setFetching(true);
    setPage(page + 1);
    const response = await DueAPI.getDue({
      itemPerPage: 10,
      page: page,
      orderBy: "due_id",
    });
    console.log(response);
    if ((response.length = 0)) {
      console.log("no has more");
      setHasmore(false);
    }
    setListDue([...listDue, ...response]);
    setFetching(false);
  }
  return (
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
  );
}

export default ListDue;
