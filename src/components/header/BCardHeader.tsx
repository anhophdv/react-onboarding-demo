import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ManImageResources from "../../assets/images/ic_man.png";

interface ICardHeader {
  avatarURL: string;
  firstName: string;
  lastName: string;
  job: string;
  department: string;
}

export default function BCardHeader(props: ICardHeader) {
  return (
    <Box>
      <Box display={"flex"} sx={{ justifyContent: "center" }}>
        <Avatar
          src={ManImageResources}
          sx={{ width: 1 / 2, height: 1 / 2, justifyContent: "center" }}
        />
      </Box>
      <Container sx={{ paddingX: 7, paddingY: 2 }}>
        <Box
          display={"flex"}
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            margin: 1,
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
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ padding: 2, justifyContent: "center" }}
        >
          <Button variant="contained" sx={{ width: 1 / 4 }}>
            Email
          </Button>
          <Button variant="contained" sx={{ width: 1 / 4 }}>
            LinkedIn
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

interface IButtonSection {
  iconName: string;
  title: string;
}

function ButtonSection(props: IButtonSection[]) {
  return (
    <Stack direction={"row"} spacing={2} sx={{ paddingX: 10, paddingY: 1 }}>
      <Button variant="contained" sx={{ width: 1 / 2 }}>
        Email
      </Button>
      <Button variant="outlined" sx={{ width: 1 / 2 }}>
        LinkedIn
      </Button>
    </Stack>
  );
}
