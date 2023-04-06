import { Avatar, Box, CardMedia, Typography } from "@mui/material";
import Movie from "../../../domain/model/Movie";

function MovieItem(props: Movie) {
  return (
    <Box display={"flex"} sx={{ flexDirection: "column" }}>
      <CardMedia
        component={"img"}
        src={props.poster_path ?? undefined}
        sx={{ width: 200, height: 300 }}
      />
      <Typography variant="h5" sx={{ WebkitLineClamp: 1, overflow: "hidden" }}>
        {props.title}
      </Typography>
      <Typography>{props.release_date}</Typography>
    </Box>
  );
}

export default MovieItem;
