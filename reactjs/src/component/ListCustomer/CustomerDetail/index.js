import { Divider, Grid } from "@mui/material";
import { Fragment } from "react";
import Profile from "./Profile";
import Trade from "./Trade";

export default function CustomerDetail() {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Trade />
        </Grid>
      </Grid>
    </Fragment>
  );
}
