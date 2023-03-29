import { Box, Grid } from "@mui/material";
import { createContext, useState } from "react";
import QuestionItem from "./components/item/QuestionItem";
import QuizzicalBottom from "./components/bottom/QuizzicalBottom";

export interface OptionProps {
  id: number;
  value: string;
  isSelected: boolean;
}

export interface QuestionProps {
  id: number;
  value: string;
  options: OptionProps[];
}

const question1 = () => {
  let options: OptionProps[] = [
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
    options: options,
  };
  return question;
};

const question2 = () => {
  let options: OptionProps[] = [
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
    options: options,
  };
  return question;
};

const question3 = () => {
  let options: OptionProps[] = [
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
    options: options,
  };
  return question;
};

const question4 = () => {
  let options: OptionProps[] = [
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
    options: options,
  };
  return question;
};

const question5 = () => {
  let options: OptionProps[] = [
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
    options: options,
  };
  return question;
};

const QuestionContext = createContext<QuestionProps[]>([]);

function QuizzicalPage() {
  const [questions, setQuestions] = useState<QuestionProps[]>([
    question1(),
    question2(),
    question3(),
    question4(),
    question5(),
  ]);
  const containerPaddingX = { xs: 1, sm: 1, md: 5, lg: 20, xl: 30 };
  const containerPaddingY = { xs: 2, sm: 2, md: 5, lg: 10, xl: 10 };

  return (
    // <QuestionContext.Provider value={questions}>
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
        {questions.map((question, _) => {
          return QuestionItem(question, (selectedQuestion) => {
            let result: QuestionProps[] = [];
            questions.forEach((item) => {
              if (item.id === selectedQuestion.id) {
                result.push(selectedQuestion);
              } else {
                result.push(item);
              }
            });
            setQuestions(result);
          });
        })}
      </Grid>
      <QuizzicalBottom />
    </Box>
    // </QuestionContext.Provider>
  );
}

export default QuizzicalPage;
