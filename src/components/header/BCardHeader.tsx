import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ManImageResources from "../../assets/images/ic_man.png";
import { ISocialInfo } from "../bCard/BCard";

interface ICardHeader {
  avatarURL: string;
  firstName: string;
  lastName: string;
  job: string;
  department: string;
  socialInfo?: ISocialInfo;
}

export default function BCardHeader(props: ICardHeader) {
  const linkedInButton: ISocialButton = {
    title: "LinkedIn",
    value: props.socialInfo?.linkedInUrl,
  };
  var buttons: ISocialButton[] = [linkedInButton];
  if (props.socialInfo?.email) {
    const emailButton: ISocialButton = {
      title: "Email",
      value: props.socialInfo?.email,
    };
    buttons.unshift(emailButton);
  }

  const openInNewTab = (url: string) => {
    window.open(url);
  };

  const containerPadding = { xs: 1, sm: 1, lg: 2, xl: 2 };

  return (
    <Box>
      <Box display={"flex"} sx={{ justifyContent: "center" }}>
        <Avatar
          src={ManImageResources}
          sx={{ width: 1 / 2, height: 1 / 2, justifyContent: "center" }}
        />
      </Box>
      <Container
        sx={{
          padding: containerPadding,
        }}
      >
        <Box
          display={"flex"}
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: 2,
          }}
        >
          <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
            {props.firstName} {props.lastName}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", textAlign: "center" }}
          >
            {props.job}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "white", textAlign: "center" }}
          >
            {props.department}
          </Typography>
        </Box>
        {SocialButton(buttons)}
      </Container>
    </Box>
  );
}

interface ISocialButton {
  title: string;
  value?: string;
}

function SocialButton(buttons: ISocialButton[]) {
  return (
    <Container
      sx={{
        flex: 1,
      }}
    >
      <Grid
        container
        columnSpacing={2}
        rowSpacing={2}
        alignItems={"center"}
        sx={{
          flexDirection: { xs: "column", sm: "column", lg: "row", xl: "row" },
        }}
      >
        {buttons.map((item, index) => (
          <Grid
            display={"flex"}
            item
            key={index}
            sx={{
              flex: 1,
              width: { xs: 1, sm: 1, lg: 1 / 2, xl: 1 / 2 },
              justifyContent: "center",
            }}
          >
            <Button variant="contained" sx={{ flex: 1, textOverflow: "clip" }}>
              {item.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
