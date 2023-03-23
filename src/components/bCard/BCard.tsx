import React from "react";
import { Box } from "@mui/material";
import BCardHeader from "../header/BCardHeader";
import { Container } from "@mui/system";
import BCardContent from "../bcard_content/BCardContent";
import BCardBottom from "../bCard_bottom/BCardBottom";

interface ICardItem {
  firstName: string;
  lastName: string;
  avatarURL: string;
  job: string;
  department: string;
  twitterURL: string;
  fbURL: string;
  instagramURL: string;
  linkedInURL: string;
  aboutDescription?: string;
  interestDescription?: string;
}

export function BCard(props: ICardItem) {
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "column",
        bgcolor: "#24252E",
        paddingX: 12,
        paddingY: 6,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1A1A21",
          borderRadius: 4,
        }}
      >
        <Container>
          <BCardHeader
            avatarURL={props.avatarURL}
            firstName={props.firstName}
            lastName={props.lastName}
            job={props.job}
            department={props.job}
          />
          <BCardContent
            aboutDescription={props.aboutDescription ?? ""}
            interestDescription={props.interestDescription ?? ""}
          />
        </Container>
        <BCardBottom />
      </Box>
    </Box>
  );
}
