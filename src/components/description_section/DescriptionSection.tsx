import { Box, Typography } from "@mui/material";
import React from "react";

interface IDescriptionSection {
  title: string;
  descriptionValue: string;
}

export default function DescriptionSection(props: IDescriptionSection) {
  return (
    <Box display={"flex"} sx={{ flexDirection: "column", flexGrow: 1 }}>
      <Typography variant="h5" sx={{ color: "white" }}>
        {props.title}
      </Typography>
      <Typography variant="body2" sx={{ color: "white" }}>
        {props.descriptionValue}
      </Typography>
    </Box>
  );
}
