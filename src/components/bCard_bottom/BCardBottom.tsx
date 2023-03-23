import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { margin, width } from "@mui/system";
import React from "react";

export default function BCardBottom() {
  return (
    <Box
      display="flex"
      sx={{
        justifyContent: "center",
        backgroundColor: "#161618",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          flexFlow: 1,

          height: 50,
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <Instagram />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <GitHub />
        </IconButton>
      </Stack>
    </Box>
  );
}
