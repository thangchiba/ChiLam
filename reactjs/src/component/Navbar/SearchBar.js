import { IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { Fragment, useRef, useState } from "react";
import { CancelOutlined } from "@mui/icons-material";

const StyledSearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  marginInline: 10,
  borderRadius: 10,
  backgroundColor: grey[100],
  maxHeight: 50,
}));

const StyledInput = styled(InputBase)((theme) => ({
  marginLeft: 15,
  width: "70%",
  padding: 0,
}));

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const showSearch = props.focusSearchBar;
  const setShowSearch = props.setFocusSearchBar;
  const inputRef = useRef("");
  function handleClickSearch() {
    alert(searchText);
  }
  function handlerChangeText(e) {
    setSearchText(e.target.value);
  }
  function handleCancelSearch() {
    setSearchText("");
  }
  return (
    <Fragment>
      <StyledSearchBar sx={{}}>
        <StyledInput
          placeholder="Tìm Kiếm..."
          value={searchText}
          onChange={handlerChangeText}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          color="error"
          onClick={handleCancelSearch}
        >
          <CancelOutlined />
        </IconButton>
      </StyledSearchBar>
    </Fragment>
  );
}

export default SearchBar;
