import React from "react";
import { Box } from "@mui/material";
import BCardHeader from "../header/BCardHeader";
import { Container } from "@mui/system";
import BCardContent from "../bcard_content/BCardContent";
import BCardBottom from "../bCard_bottom/BCardBottom";

export interface IPerson {
  id: number;
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
  socialInfo?: ISocialInfo;
}

export interface ISocialInfo {
  email?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  fbUrl?: string;
  instagramUrl?: string;
  githubUrl?: string;
}

export function BCard(props: IPerson) {
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "column",
        bgcolor: "#24252E",
        paddingX: { xs: 2, sm: 3, lg: 12, xlg: 14 },
        paddingY: { xs: 2, lg: 6 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1A1A21",
          borderRadius: 4,
        }}
      >
        <Container sx={{ paddingX: { xs: 1, sm: 1, lg: 3, xl: 3 } }}>
          <BCardHeader
            avatarURL={props.avatarURL}
            firstName={props.firstName}
            lastName={props.lastName}
            job={props.job}
            department={props.job}
            socialInfo={props.socialInfo}
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
