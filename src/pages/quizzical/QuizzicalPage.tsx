import {
  Box,
  Button,
  Grid,
  styled,
  ButtonProps,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import QuizzicalItem from "./components/item/QuizzicalItem";
import QuizzicalBottom from "./components/bottom/QuizzicalBottom";
import AppTheme from "../../components/custom_theme/CustomTheme";
import globalTheme from "../../components/custom_theme/CustomTheme";

export interface AnswerProps {
  id: number;
  value: string;
  isSelected: boolean;
}

export interface QuestionProps {
  id: number;
  value: string;
  answers: AnswerProps[];
}

const question1 = () => {
  let answers: AnswerProps[] = [
    {
      id: 1,
      value: "Adio's",
      isSelected: false,
    },
    {
      id: 2,
      value: "Hola",
      isSelected: false,
    },
    {
      id: 3,
      value: "Au Revior",
      isSelected: false,
    },
    {
      id: 4,
      value: "Salir",
      isSelected: false,
    },
  ];
  let question: QuestionProps = {
    id: 1,
    value: "How would one want say goodbye in Spanish?",
    answers: answers,
  };
  return question;
};

const question2 = () => {
  let answers: AnswerProps[] = [
    {
      id: 1,
      value: "Cabbage Patch Kids",
      isSelected: false,
    },
    {
      id: 2,
      value: "Transformers",
      isSelected: false,
    },
    {
      id: 3,
      value: "Care Bears",
      isSelected: false,
    },
    {
      id: 4,
      value: "Rubik's Cube",
      isSelected: false,
    },
  ];
  let question: QuestionProps = {
    id: 2,
    value:
      "Which best selling toy of 1983 caused hyteria, resulting in riots breaking in stores?",
    answers: answers,
  };
  return question;
};

const question3 = () => {
  let answers: AnswerProps[] = [
    {
      id: 1,
      value: "Mercury",
      isSelected: false,
    },
    {
      id: 2,
      value: "Venus",
      isSelected: false,
    },
    {
      id: 3,
      value: "Mars",
      isSelected: false,
    },
    {
      id: 4,
      value: "Saturn",
      isSelected: false,
    },
  ];
  let question: QuestionProps = {
    id: 3,
    value: "What is the hottest plannet in our Solar System?",
    answers: answers,
  };
  return question;
};

const question4 = () => {
  let answers: AnswerProps[] = [
    {
      id: 1,
      value: "Italy",
      isSelected: false,
    },
    {
      id: 2,
      value: "Portugal",
      isSelected: false,
    },
    {
      id: 3,
      value: "Mexico",
      isSelected: false,
    },
    {
      id: 4,
      value: "France",
      isSelected: false,
    },
  ];
  let question: QuestionProps = {
    id: 4,
    value: "In which country was the caesar salad invented?",
    answers: answers,
  };
  return question;
};

const question5 = () => {
  let answers: AnswerProps[] = [
    {
      id: 1,
      value: "One",
      isSelected: false,
    },
    {
      id: 2,
      value: "Two",
      isSelected: false,
    },
    {
      id: 3,
      value: "Three",
      isSelected: false,
    },
    {
      id: 4,
      value: "Four",
      isSelected: false,
    },
  ];
  let question: QuestionProps = {
    id: 5,
    value: "How many Hearts Does AN Octopus Have?",
    answers: answers,
  };
  return question;
};

const questions: QuestionProps[] = [
  question1(),
  question2(),
  question3(),
  question4(),
  question5(),
];

function QuizzicalPage() {
  const containerPaddingX = { xs: 2, sm: 2, md: 5, lg: 20, xl: 30 };
  const containerPaddingY = { xs: 2, sm: 2, md: 5, lg: 10, xl: 10 };

  return (
    <Box>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        sx={{
          flex: 1,
          rowGap: 2,
          px: containerPaddingX,
          py: containerPaddingY,
        }}
      >
        {questions.map((question, index) => QuizzicalItem(question))}
      </Grid>
      <QuizzicalBottom />
    </Box>
  );
}

export default QuizzicalPage;
