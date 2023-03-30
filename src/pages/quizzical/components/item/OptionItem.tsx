import { Box, BoxProps, styled, Typography } from "@mui/material";
import { AppColorConstants } from "../../../../utils/AppConstants";
import { OptionProps } from "../../QuizzicalPage";

function OptionItem(
  option: OptionProps,
  trueAnswerId: number,
  submitted: boolean,
  onSelectOption: (option: OptionProps) => void
) {
  const OptionBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "purple",
    backgroundColor: "red",
    borderWidth: 2,
    px: { xs: 0.5, sm: 0.5, lg: 16, xl: 16 },
    py: { xs: 0.25, sm: 0.25, lg: 0.5, xl: 0.5 },
    borderRadius: 16,
  }));
  let bgColor = option.isSelected
    ? AppColorConstants.BG_ANSWER_SELECTED
    : AppColorConstants.BG_ANSWER_UNSELECTED;

  if (submitted && option.id === trueAnswerId) {
    bgColor = AppColorConstants.BG_TRUE_ANSWER;
  }
  return (
    <>
      <OptionBox
        onClick={() => {
          submitted == false && onSelectOption(option);
        }}
        sx={{ backgroundColor: bgColor }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            px: { xs: 0.5, sm: 0.5, lg: 1, xl: 1 },
            py: { xs: 0.25, sm: 0.25, lg: 0.5, xl: 0.5 },
          }}
        >
          {option.value}
        </Typography>
      </OptionBox>
    </>
  );
}

export default OptionItem;
