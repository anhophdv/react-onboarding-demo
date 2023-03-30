import {
  Box,
  Button,
  ButtonProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { AppColorConstants } from "../../../../utils/AppConstants";

const CustomCheckAnswerButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: 16,
  color: "white",
  backgroundColor: AppColorConstants.BG_SUBMIT_BUTTON,
  // "&:hover": {
  //   backgroundColor: AppColorConstants.BG_ANSWER_SELECTED,
  // },
}));

function QuizzicalBottom(
  scored: null | number,
  onSubmitAnswer: () => void,
  onPlayAgain: () => void
) {
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "center",
        py: { xs: 1, sm: 2, lg: 3, xl: 3 },
      }}
    >
      {scored == null && (
        <CustomCheckAnswerButton
          variant="contained"
          size="large"
          onClick={() => {
            onSubmitAnswer();
          }}
        >
          Check answer
        </CustomCheckAnswerButton>
      )}

      {scored && (
        <Stack direction={"row"} columnGap={{ xs: 1, sm: 2, lg: 3, xl: 4 }}>
          <Box display={"flex"} sx={{ flexDirection: "row" }}>
            <Typography>Your scored is {scored} correct answer</Typography>
          </Box>
          <CustomCheckAnswerButton
            variant="contained"
            size="large"
            onClick={onPlayAgain}
          >
            Play again
          </CustomCheckAnswerButton>
        </Stack>
      )}
    </Box>
  );
}

export default QuizzicalBottom;
