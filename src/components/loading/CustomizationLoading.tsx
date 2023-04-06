import { Box, CircularProgress } from "@mui/material";

function CustomizationLoading() {
  return (
    <Box
      height={500}
      display={"flex"}
      sx={{ flex: 1, justifyContent: "center" }}
    >
      <CircularProgress color="success" />
    </Box>
  );
}

export default CustomizationLoading;
