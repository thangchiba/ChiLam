import { Box } from "@mui/system";
import AddDueButton from "./component/Due/AddDueButton";
import AddTrade from "./component/ListCustomer/CustomerDetail/AddTrade";
import Navbar from "./component/Navbar";

function Layout(props) {
  return (
    <Box>
      <Navbar />
      {props.children}
      {/* <AddDueButton /> */}
      <AddTrade />
    </Box>
  );
}

export default Layout;
