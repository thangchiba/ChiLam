import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ListDue from "../../Due/ListDue";
import Due from "./Due";

export default function Trade() {
  const [showMode, setShowMode] = useState("all");
  return (
    <Stack px={3} spacing={1.5} sx={{ display: "block", overflow: "auto" }}>
      <Typography variant="h3" color="primary" textAlign="center" my={3}>
        Thanh Toán
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={showMode}
        exclusive
        onChange={(e) => setShowMode(e.target.value)}
      >
        <ToggleButton value="all">Tất Cả</ToggleButton>
        <ToggleButton value="due">Ghi Nợ</ToggleButton>
        <ToggleButton value="pay">Thanh Toán</ToggleButton>
      </ToggleButtonGroup>

      {showMode === "due" && <Due />}
    </Stack>
  );
}
