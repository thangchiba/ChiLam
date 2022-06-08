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
  const [mode, setMode] = useState("due");
  return (
    <Stack px={3} spacing={1.5} sx={{ overflow: "hidden" }}>
      <Typography variant="h3" color="primary" textAlign="center" my={3}>
        Thanh Toán
      </Typography>

      <ToggleButtonGroup
        color="primary"
        value={mode}
        exclusive
        onChange={(e) => setMode(e.target.value)}
      >
        <ToggleButton value="due">Ghi Nợ</ToggleButton>
        <ToggleButton value="pay">Thanh Toán</ToggleButton>
      </ToggleButtonGroup>

      {mode === "due" && <Due />}
    </Stack>
  );
}
