import { Box, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import MovieItem from "./components/MoviewItem";
import {
  MovieConfiguration,
  MovieConfigurationResponse,
} from "../../domain/model/MovieDBConfiguration";
import { APIConstants } from "../../constants/ApiConstants";
import { API } from "../../api/API";
import Movie, { MovieTrendingResponse } from "../../domain/model/Movie";

interface TrendingViewType {
  key: string;
  name: string;
  isSelected: boolean;
}

function MoviesTrendingPage() {
  var [moviesList, setMoviesList] = useState<Movie[]>([]);
  var [configuration, setConfiguration] = useState<MovieConfiguration | null>(
    null
  );

  const dayTrendingView: TrendingViewType = {
    key: "day",
    name: "Today",
    isSelected: true,
  };
  const weekTrendingView: TrendingViewType = {
    key: "week",
    name: "This week",
    isSelected: false,
  };
  const [trendingViewType, setTrendingViewType] = useState<TrendingViewType[]>([
    dayTrendingView,
    weekTrendingView,
  ]);

  const onClickTrendingViewType = (selectedItem: TrendingViewType) => {
    const items = trendingViewType.map((item) => {
      item.isSelected = item.key === selectedItem.key;
      return item;
    });
    setTrendingViewType(items);
  };

  useEffect(() => {
    getConfiguration().then((response) => {
      if (!response) return;
      setConfiguration(response);
      const selectedTrendingItem = trendingViewType.find(
        (item, _) => item.isSelected == true
      );
      if (!selectedTrendingItem) return;
      getMovieTrending(selectedTrendingItem).then((moviesResponse) => {
        if (!moviesResponse) return;
        const moviesResult = moviesResponse.map((movie) => {
          movie.poster_path =
            response.secure_base_url +
            response.poster_sizes[response.poster_sizes.length - 1] +
            movie.poster_path;
          return movie;
        });
        setMoviesList(moviesResult);
      });
    });
  }, [trendingViewType]);

  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: "column",
        px: { xs: 1, sm: 2, lg: 10, xl: 10 },
      }}
    >
      <Box
        sx={{
          py: { lg: 4, xl: 4 },
          justifyContent: "center",
          display: "flex",
        }}
      >
        <ToggleButtonGroup>
          {trendingViewType.map((item, _) => {
            return (
              <ToggleButton
                key={item.key}
                value={item.key}
                selected={item.isSelected}
                onClick={() => onClickTrendingViewType(item)}
              >
                {item.name}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>

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

  async function getConfiguration() {
    try {
      const url = APIConstants.movieConfigurationPath;
      const response = await API.getAxiosInstance().get(url, {
        params: {
          api_key: "0302596c4f4e8b4f243a1ec19031031b",
        },
      });
      const data: MovieConfigurationResponse = response.data;
      const configurationResponse: MovieConfiguration = data.images;

      return configurationResponse;
    } catch (error) {
      console.log("GetMovieDBConfiguration have an error", error);
    }
  }

  async function getMovieTrending(trendingType: TrendingViewType) {
    try {
      const url = APIConstants.movieTrending + "/all/" + trendingType.key;
      const response = await API.getAxiosInstance().get(url, {
        params: {
          api_key: "0302596c4f4e8b4f243a1ec19031031b",
        },
      });
      const movieResponse: MovieTrendingResponse = response.data;
      const movies: Movie[] = movieResponse.results ?? [];
      return movies;
    } catch (error) {
      console.log("Failed to fetch movie trending list:", error);
    }
  }
}

export default MoviesTrendingPage;
