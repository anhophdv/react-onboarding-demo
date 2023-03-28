import {
  Box,
  Button,
  ButtonProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";

const CustomCheckAnswerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.primary.main,
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

function QuizzicalBottom() {
  const [scored, setScored] = useState<{ scored: null | number }>({
    scored: null,
  });
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "row",
        flexGrow: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        py: { xs: 1, sm: 2, lg: 3, xl: 3 },
      }}
    >
      {scored == null && (
        <CustomCheckAnswerButton
          variant="contained"
          size="large"
          onClick={() => {
            setScored((prevState) => ({ scored: 5 }));
          }}
        >
          Check answer
        </CustomCheckAnswerButton>
      )}

      {scored && (
        <Stack direction={"row"} columnGap={{ xs: 1, sm: 2, lg: 3, xl: 4 }}>
          <Box display={"flex"} sx={{ flexDirection: "row" }}>
            <Typography>Your scored is ... correct answer</Typography>
          </Box>
          <CustomCheckAnswerButton variant="contained" size="large">
            Play again
          </CustomCheckAnswerButton>
        </Stack>
      )}
    </Box>
  );
}

export default QuizzicalBottom;
