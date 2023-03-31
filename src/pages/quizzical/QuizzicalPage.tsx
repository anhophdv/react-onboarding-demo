import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import QuestionItem from "./components/item/QuestionItem";
import QuizzicalBottom from "./components/bottom/QuizzicalBottom";
import AppAlert from "../../components/alert/AppAlert";

export interface OptionProps {
  id: number;
  value: string;
  isSelected: boolean;
}

export interface QuestionProps {
  id: number;
  value: string;
  options: OptionProps[];
  answerId: number;
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
    answerId: 3,
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
    answerId: 1,
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
    answerId: 4,
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
    answerId: 2,
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
    answerId: 2,
  };
  return question;
};

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
  const [totalPoint, setTotalPoint] = useState<number | null>(null);

  const onSelectOptionInQuestion = (selectedQuestion: QuestionProps) => {
    setQuestions((currentQuestions) =>
      currentQuestions.map((question, _) =>
        question.id == selectedQuestion.id
          ? { ...selectedQuestion }
          : { ...question }
      )
    );
  };

  const validateAnswerSubmittion = () => {
    let numAnswerSelection: number = 0;
    questions.forEach((item) => {
      let index = item.options.findIndex(
        (option) => option.isSelected === true
      );
      if (index >= 0) {
        numAnswerSelection += 1;
      }
    });
    return numAnswerSelection > 0 ? true : false;
  };

  const checkAnswer = () => {
    let point: number = 0;
    questions.forEach((question) => {
      let index = question.options.findIndex(
        (option) => option.isSelected === true
      );
      if (index >= 0 && question.options[index].id === question.answerId) {
        point += 1;
      }
    });
    setTotalPoint(point);
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState<boolean>(false);

  const playAgain = () => {
    setTotalPoint(null);
    setSubmitted(false);
    let resetedQuestions: QuestionProps[] = [];
    questions.forEach((item) => {
      item.options.forEach((option) => (option.isSelected = false));
      resetedQuestions.push(item);
    });
    setQuestions(resetedQuestions);
  };

  const [showAlert, setShowAlert] = useState<boolean>(false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => {};
  }, [showAlert]);

  return (
    <Box>
      {showAlert && <AppAlert msg="Please choose your answer" />}
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
          return QuestionItem(question, submitted, (selectedQuestion) => {
            onSelectOptionInQuestion(selectedQuestion);
          });
        })}
      </Grid>
      {QuizzicalBottom(
        totalPoint,
        () => {
          if (!validateAnswerSubmittion()) {
            setShowAlert(true);
          } else {
            checkAnswer();
          }
        },
        () => {
          playAgain();
        }
      )}
    </Box>
  );
}

export default QuizzicalPage;
