import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import DatePicker from "./DatePicker";

function Filter() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <SavedSearchIcon sx={{ fontSize: 40, color: blue[400] }} />
        <Typography variant="h4" color={blue[400]}>
          Tùy Chọn
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid xs={9}>
            <DatePicker />
          </Grid>
          <Button variant="outlined" color="success" sx={{ height: 55, ml: 2 }}>
            Lọc
          </Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
export default Filter;
