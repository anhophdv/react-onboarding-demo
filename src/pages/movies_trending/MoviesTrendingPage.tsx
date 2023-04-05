import { Box, Grid } from "@mui/material";
import MovieJSON from "./dumies_data/Movies.json";
import ConfigurationJSON from "./dumies_data/Configuration.json";
import { useState } from "react";
import MovieItem from "./components/MoviewItem";

function MoviesTrendingPage() {
  const imagesConfiguration = ConfigurationJSON.images;
  const configuration: Configuration = {
    baseUrl: imagesConfiguration.base_url,
    secureBaseUrl: imagesConfiguration.secure_base_url,
    backdropSizes: imagesConfiguration.backdrop_sizes.map(
      (sizeItem, _) => sizeItem
    ),
    logoSizes: imagesConfiguration.logo_sizes.map((logoSize, _) => logoSize),
    posterSizes: imagesConfiguration.poster_sizes.map(
      (posterSize, _) => posterSize
    ),
    profileSizes: imagesConfiguration.profile_sizes.map(
      (profileSize, _) => profileSize
    ),
  };

  let movies = MovieJSON.results.map((item, index) => {
    let movie: MovieProps = {
      id: item.id,
      title: item.title,
      originalLanguage: item.original_language,
      originalTitle: item.original_title,
      voteCount: item.vote_count,
      posterPath:
        configuration.secureBaseUrl +
        configuration.posterSizes[configuration.posterSizes.length - 1] +
        item.poster_path,
      adult: item.adult,
      overview: item.overview,
      releaseDate: item.release_date,
      genreId: item.genre_ids,
      popularity: item.popularity,
      backdropPath: item.backdrop_path,
    };
    return movie;
  });
  var [moviesList, setMoviesList] = useState<MovieProps[]>(movies);
  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "column",
        px: { xs: 1, sm: 2, lg: 10, xl: 10 },
      }}
    >
      <Grid
        container
        direction={"row"}
        sx={{ columnGap: { xs: 1, sm: 1, lg: 2, xl: 2 } }}
      >
        {moviesList.map((item, index) => {
          return (
            <Grid item key={item.id} sx={{ flex: 1 }}>
              {MovieItem(item)}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export interface MovieProps {
  id: number;
  title?: string;
  originalLanguage: string;
  originalTitle?: string;
  voteCount: number;
  posterPath: string | null;
  adult: boolean;
  overview: string;
  releaseDate?: string;
  genreId: number[];
  popularity: number;
  backdropPath: string | null;
}

interface Configuration {
  baseUrl: string;
  secureBaseUrl: string;
  backdropSizes: string[];
  logoSizes: string[];
  posterSizes: string[];
  profileSizes: string[];
}

export default MoviesTrendingPage;
