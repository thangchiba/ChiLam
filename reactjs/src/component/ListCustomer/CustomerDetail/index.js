import { Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customerAPI from "../../HTTP_Request/CustomerAPI";
import Profile from "./Profile";
import Trade from "./Trade";

export default function CustomerDetail() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    async function getCustomer() {
      const response = await customerAPI.getCustomer({
        customerId: customerId,
      });
      if (response) setCustomer(response[0]);
      return response[0];
    }
    getCustomer();
  }, [customerId]);
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Profile customer={customer} setCustomer={setCustomer} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Trade customer={customer} setCustomer={setCustomer} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
