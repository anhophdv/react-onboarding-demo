import styled from "@emotion/styled";
import {
  Box,
  BoxProps,
  Button,
  Divider,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import globalTheme from "../../../../components/custom_theme/CustomTheme";
import AppTheme from "../../../../components/custom_theme/CustomTheme";
import { AppColorConstants } from "../../../../utils/AppConstants";
import { QuestionProps, AnswerProps } from "../../QuizzicalPage";

const AnswerBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  backgroundColor: AppColorConstants.BG_ANSWER_UNSELECTED,
  borderColor: "purple",
  borderWidth: 2,
  px: { xs: 0.5, sm: 0.5, lg: 16, xl: 16 },
  py: { xs: 0.25, sm: 0.25, lg: 0.5, xl: 0.5 },
  borderRadius: 3,
}));

function QuizzicalItem(question: QuestionProps) {
  return (
    <Container>
      <Box display={"flex"} sx={{ flexDirection: "column" }}>
        <Grid item key={question.id} display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            sx={{
              flexDirection: "column",
              px: { xs: 2, sm: 2, lg: 5, xl: 5 },
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
                {question.answers.map((answer, index) => {
                  return (
                    <AnswerBox>
                      <Typography variant="h5" sx={{ color: "primary.main" }}>
                        {answer.value}
                      </Typography>
                    </AnswerBox>
                  );
                })}
              </Stack>
            </Box>
            <Divider />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}

export default QuizzicalItem;
