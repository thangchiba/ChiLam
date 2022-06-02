import { Box } from "@mui/system";
import AddCustomer from "./AddCustomer";

function Header() {
  return (
    <Box display="flex" my={1}>
      <AddCustomer />
    </Box>
  );
}

export default Header;
