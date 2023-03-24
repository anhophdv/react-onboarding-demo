import { Container, Stack } from "@mui/material";
import React from "react";
import DescriptionSection from "../description_section/DescriptionSection";

interface ICardContent {
  aboutDescription: string;
  interestDescription: string;
}

export default function BCardContent(props: ICardContent) {
  const containerPaddingX = { xs: 2, sm: 2, lg: 5, xlg: 5 };
  const containerPaddingY = { xs: 1, sm: 1, lg: 2, xlg: 2 };

  return (
    <>
      <Container
        sx={{ paddingX: containerPaddingX, paddingY: containerPaddingY }}
      >
        <Stack spacing={5} sx={{ paddingY: containerPaddingY }}>
          <DescriptionSection
            title="About"
            descriptionValue={props.aboutDescription}
          />
          <DescriptionSection
            title="Interest"
            descriptionValue={props.interestDescription}
          />
        </Stack>
      </Container>
    </>
  );
}
