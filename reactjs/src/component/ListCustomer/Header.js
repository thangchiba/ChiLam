import styled from "@emotion/styled";
import { AddCircleOutlined } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Fragment, useState } from "react";
import AddCustomer from "./AddCustomer";

function Header() {
  const [openAddCustomer, setOpenAddCustomer] = useState();
  function handleOpenAddCustomer() {
    setOpenAddCustomer(true);
  }
  return (
    <Box display="flex" my={1}>
      <Button
        variant="outlined"
        color="success"
        size="large"
        endIcon={<AddCircleOutlined />}
        onClick={handleOpenAddCustomer}
      >
        Thêm Khách
      </Button>
      <AddCustomer open={openAddCustomer} setOpen={setOpenAddCustomer} />
    </Box>
  );
}

export default Header;
