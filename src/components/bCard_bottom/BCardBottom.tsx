import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
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
        flexWrap: "wrap",
      }}
    >
      <Stack
        direction={"row"}
        spacing={{ xs: 1, sm: 1, lg: 2, xl: 2 }}
        sx={{
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
