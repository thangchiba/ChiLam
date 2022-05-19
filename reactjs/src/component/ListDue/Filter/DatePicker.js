import { Box, TextField } from "@mui/material";

function DatePicker() {
  return (
    <Box>
      <TextField
        id="from_date"
        label="Từ Ngày"
        type="date"
        defaultValue="2022-05-19"
        sx={{ width: 120 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="to_date"
        label="Đến Ngày"
        type="date"
        defaultValue="2022-05-19"
        sx={{ width: 120, ml: 2 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}
export default DatePicker;
