import { Container, Stack } from "@mui/material";
import React from "react";
import DescriptionSection from "../description_section/DescriptionSection";

interface ICardContent {
  aboutDescription: string;
  interestDescription: string;
}

export default function BCardContent(props: ICardContent) {
  return (
    <>
      <Container sx={{ paddingX: 7, paddingY: 2 }}>
        <Stack spacing={5} sx={{ paddingY: 3 }}>
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
