import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { tradeAction } from "../../../../store/TradeSlice";
import TradeAPI from "../../../HTTP_Request/TradeAPI";
import AddTrade from "./AddTrade";
import TradeItem from "./TradeItem";

function ListTrade({ customer, setCustomer }) {
  const dispatch = useDispatch();
  const listTradeRedux = useSelector((redux) => redux.trade.listTrade);
  const customerAfterAddTrade = useSelector(
    (redux) => redux.trade.customerAfterAddTrade
  );
  const [listTrade, setListTrade] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasmore] = useState(true);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setCustomer(customerAfterAddTrade);
  }, [customerAfterAddTrade]);
  async function loadMore() {
    if (fetching) return;
    if (!customer.customerId) return;
    console.log("loadmore");
    setPage(page + 1);
    setFetching(true);
    const response = await TradeAPI.getTrade({
      itemPerPage: 10,
      page: page,
      customerId: customer.customerId,
      orderBy: "trade_id desc",
    });
    console.log(response);
    if (response.length == 0) {
      console.log("no has more");
      setHasmore(false);
    }
    setListTrade([...listTrade, ...response]);
    // dispatch(tradeAction.addListTrade({ listTrade: response }));
    setFetching(false);
  }

  function addTrade(trade) {
    console.log(trade);
    setListTrade([trade, ...listTrade]);
  }
  return (
    <Fragment>
      <div style={{ height: "400px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          threshold={50}
          loader={<CircularProgress color="success" />}
          useWindow={false}
        >
          {[...listTradeRedux, ...listTrade].map((trade) => {
            return (
              <TradeItem
                trade={trade}
                key={trade.tradeId}
                customer={customer}
                setCustomer={setCustomer}
              />
            );
          })}
        </InfiniteScroll>
      </div>
      <AddTrade
        customer={customer}
        setCustomer={setCustomer}
        addTrade={addTrade}
      />
    </Fragment>
  );
}

export default ListTrade;
