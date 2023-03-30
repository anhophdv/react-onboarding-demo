import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { QuestionProps } from "../../QuizzicalPage";
import OptionItem from "./OptionItem";

function QuestionItem(
  question: QuestionProps,
  onSelectOptionForQuestion: (question: QuestionProps) => void
) {
  return (
    <Box display={"flex"} sx={{ flexDirection: "column" }}>
      <Container>
        <Grid item key={question.id} display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            sx={{
              flexDirection: "column",
              py: { xs: 0.5, sm: 0.5, lg: 1, xl: 1 },
            }}
          >
            <Typography variant="h4" sx={{ color: "text.primary" }}>
              {question.value}
            </Typography>
            <Box>
              <Stack
                direction={"row"}
                spacing={{ xs: 1, sm: 1, lg: 3, xl: 3 }}
                sx={{ py: { xs: 1, sm: 1, lg: 2, xl: 2 } }}
              >
                {question.options.map((option, index) => {
                  return OptionItem(option, () => {
                    let currentQuestion = question;
                    currentQuestion.options.forEach((value) => {
                      value.isSelected =
                        value.id === option.id ? !value.isSelected : false;
                    });
                    onSelectOptionForQuestion(currentQuestion);
                  });
                })}
              </Stack>
            </Box>
            <Divider />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default QuestionItem;
