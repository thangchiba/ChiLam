import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { dueAction } from "../../../../store/DueSlice";
import DueAPI from "../../../HTTP_Request/DueAPI";
import DueItem from "./DueItem";

function ListDue() {
  const dispatch = useDispatch();
  const listDueRedux = useSelector((redux) => redux.due.listDue);
  const [listDue, setListDue] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const scrollParentRef = useRef();

  async function loadMore() {
    if (fetching) return;
    console.log("loadmore");
    setPage(page + 1);
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
    setListDue([...listDue, ...response]);
    // dispatch(dueAction.addListDue({ listDue: response }));
    setFetching(false);
  }

  return (
    <div style={{ height: "400px", overflow: "auto" }} ref={scrollParentRef}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        threshold={50}
        loader={<CircularProgress color="success" />}
        useWindow={false}
      >
        {[...listDueRedux, ...listDue].map((due) => {
          return <DueItem due={due} key={due.dueId} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export default ListDue;
