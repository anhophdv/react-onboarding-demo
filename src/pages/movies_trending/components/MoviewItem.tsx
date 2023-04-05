import { Avatar, Box, CardMedia, Typography } from "@mui/material";
import { MovieProps } from "../MoviesTrendingPage";

function MovieItem(props: MovieProps) {
  return (
    <Box display={"flex"} sx={{ flexDirection: "column" }}>
      <CardMedia
        component={"img"}
        src={props.posterPath ?? undefined}
        sx={{ width: 200, height: 300 }}
      />
      <Typography variant="h5" sx={{ WebkitLineClamp: 1, overflow: "hidden" }}>
        {props.title}
      </Typography>
      <Typography>{props.releaseDate}</Typography>
    </Box>
  );
}

export default MovieItem;
