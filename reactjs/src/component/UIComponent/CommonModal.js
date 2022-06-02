import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const StyledBox = styled(Box)({
  backgroundColor: "white",
  width: 400,
  height: "70vh",
  borderRadius: 20,
  padding: 10,
  overflow: "scroll",
});

function CommonModal(props) {
  const { setOpen } = props;
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      onBackdropClick={() => setOpen(false)}
      {...props}
    >
      <StyledBox>
        <Box display="flex" justifyContent="end">
          <CloseOutlinedIcon
            fontSize="large"
            onClick={() => setOpen(false)}
            cursor="pointer"
          />
        </Box>
        {props.children}
      </StyledBox>
    </Modal>
  );
}

export default CommonModal;
