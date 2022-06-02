import { Box } from "@mui/system";
import AddDueButton from "./component/Due/AddDueButton";
import Navbar from "./component/Navbar";

function Layout(props) {
  return (
    <Box>
      <Navbar />
      {props.children}
      <AddDueButton />
    </Box>
  );
}

export default Layout;
