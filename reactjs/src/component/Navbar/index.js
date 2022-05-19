import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import Category from "./Category";
import Notification from "./Notification";
import SearchBarNew from "./SearchBarNew";
import UserAvatar from "./UserAvatar";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  color: "black",
  height: 70,
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
            {/* <SearchBar /> */}
            <SearchBarNew />
            <Notification />
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
