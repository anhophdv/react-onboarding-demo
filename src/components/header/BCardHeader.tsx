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

  const containerPaddingX = { xs: 2, sm: 2, lg: 7, xlg: 7 };
  const containerPaddingY = { xs: 1, sm: 1, lg: 2, xlg: 2 };

  return (
    <>
      <Box display={"flex"} sx={{ justifyContent: "center" }}>
        <Avatar
          src={ManImageResources}
          sx={{ width: 1 / 2, height: 1 / 2, justifyContent: "center" }}
        />
      </Box>
      <Container
        sx={{ paddingX: containerPaddingX, paddingY: containerPaddingY }}
      >
        <Box
          display={"flex"}
          sx={{
            justifyContent: "center",
            flexDirection: "column",
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
    </>
  );
}

interface ISocialButton {
  title: string;
  value?: string;
}

function SocialButton(buttons: ISocialButton[]) {
  const boxMarginY = { xs: 1, sm: 1, lg: 2, xlg: 2 };
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "row",
        flex: 1,
        marginY: boxMarginY,
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        sx={{
          justifyContent: "center",
        }}
      >
        {buttons.map((item, index) => (
          <Grid display={"flex"} item key={index} sx={{ width: 1 / 2 }}>
            <Button variant="contained" sx={{ flex: 1 }}>
              {item.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
