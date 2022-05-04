import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Category from "./Category";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  color: "black",
});

function Navbar() {
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <UserAvatar />
            <Category />
            <SearchBar />
            <Notification />
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
