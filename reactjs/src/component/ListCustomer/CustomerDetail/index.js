import { Divider, Grid } from "@mui/material";
import { Fragment } from "react";
import Profile from "./Profile";

export default function CustomerDetail() {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={7}>
          listitem
        </Grid>
      </Grid>
    </Fragment>
  );
}
