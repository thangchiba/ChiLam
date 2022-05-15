import { Box } from "@mui/system";
import { Fragment } from "react";
import Navbar from "./component/Navbar";

function Layout(props) {
  return (
    <Box>
      <Navbar />
      {props.children}
    </Box>
  );
}

export default Layout;
