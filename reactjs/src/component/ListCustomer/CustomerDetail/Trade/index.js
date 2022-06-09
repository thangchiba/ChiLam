import { Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import Header from "./Header";
import ListTrade from "./ListTrade";

function Trade({ customer, setCustomer }) {
  const [showMode, setShowMode] = useState("all");
  return (
    <Fragment>
      <Stack px={3} spacing={1.5} sx={{ display: "block", overflow: "auto" }}>
        <Typography variant="h3" color="primary" textAlign="center" my={3}>
          Thanh Toán
        </Typography>

        {/* <ToggleButtonGroup
          color="primary"
          value={showMode}
          exclusive
          onChange={(e) => setShowMode(e.target.value)}
        >
          <ToggleButton value="all">Tất Cả</ToggleButton>
          <ToggleButton value="due">Ghi Nợ</ToggleButton>
          <ToggleButton value="pay">Thanh Toán</ToggleButton>
        </ToggleButtonGroup> */}

        <Header />
        <ListTrade
          showMode={showMode}
          customer={customer}
          setCustomer={setCustomer}
        />
      </Stack>
    </Fragment>
  );
}

export default Trade;
